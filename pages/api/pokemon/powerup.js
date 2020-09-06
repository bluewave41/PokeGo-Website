import { applySession } from 'next-session';
const WebsiteCommands = require('../WebsiteCommands');
const Verifier = require('../Verifier');
const db = require('../db');
const PokemonData = require('../PokemonData');
const PokemonCommands = require('../PokemonCommands');

export default async function handler(req, res) {
    await applySession(req, res);
	let verifier = new Verifier(WebsiteCommands.getUserID(req));
	await verifier.setUniquePokemonID(req.body.uniquePokemonID);
	await verifier.setCandyAmount(req.body.amount);
	
	let errors = verifier.getErrors();
	if(errors.length) {
		res.send({error: errors[0]});
		return;
	}
	let oldLevel = verifier.pokemon.level;
	await powerupPokemon(verifier.userID, verifier.pokemon, verifier.amount);
	let newLevel = verifier.pokemon.level;
	res.send({pokemon: verifier.pokemon, oldLevel: oldLevel, newLevel: newLevel});
}

async function powerupPokemon(userID, pokemon, amount) {
    let candyID = PokemonData[pokemon.pokemonID].candyID;
    pokemon.level += amount;
    PokemonCommands.updatePokemonStats(userID, pokemon);
    let candy = await db.candy.findOne({
        include: [{
            model: db.user,
            where: {userID: userID},
        }],
        where: {
            candyID: candyID,
        }
    });
    candy.decrement({'amount': amount});
    return pokemon.level;
}
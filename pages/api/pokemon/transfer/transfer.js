import { applySession } from 'next-session';
const db = require('../../db');
const WebsiteCommands = require('../../WebsiteCommands');
const Verifier = require('../../Verifier');
const UserCommands = require('../../UserCommands');
const PokemonData = require('../../PokemonData');

export default async function handler(req, res) {
    await applySession(req, res);
	let verifier = new Verifier(WebsiteCommands.getUserID(req));
	if(!req.body.uniquePokemonID) {
		let json = await UserCommands.getJSON(verifier.userID);
		await verifier.setUniquePokemonID(json);
	}
	else {
		await verifier.setUniquePokemonID(req.body.uniquePokemonID);
	}
	let errors = verifier.getErrors();
	if(errors.length) {
		res.send({error: errors[0]});
	}
	await UserCommands.reset(verifier.userID);
	//add currency
	let addedCurrency = getTransferAmount(verifier.pokemon.pokemonID);
	await UserCommands.addCurrency(verifier.userID, addedCurrency);
	//transfer pokemon
	await transferPokemon(verifier.userID, verifier.uniquePokemonID);
	//add candy
	
	res.send({pokemon: verifier.pokemon, amount: addedCurrency});
}

async function transferPokemon(userID, uniquePokemonID) {
	await db.pokemon.destroy({
        where: {userID: userID, id: uniquePokemonID}
    });
	//add candy
}

function getTransferAmount(pokemonID) {
	let amount;
    let stage = PokemonData[pokemonID].stage;
    switch(stage) {
        case 1:
			return 25;
        case 2:
			return 50;
        case 3:
			return 100;
    }
}
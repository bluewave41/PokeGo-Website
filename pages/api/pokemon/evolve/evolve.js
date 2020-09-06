import { applySession } from 'next-session';
const WebsiteCommands = require('../../WebsiteCommands');
const Verifier = require('../../Verifier');
const db = require('../../db');
const UserCommands = require('../../UserCommands');
const PokemonCommands = require('../../PokemonCommands');
const CandyCommands = require('../../CandyCommands');

export default async function handler(req, res) {
    await applySession(req, res);
	let verifier = new Verifier(WebsiteCommands.getUserID(req));
	let {uniquePokemonID, evolveCost, evolveID, oldName, newName} = await UserCommands.getJSON(verifier.userID);
	
	await verifier.setUniquePokemonID(uniquePokemonID);
	
	let errors = verifier.getErrors();
	if(errors.length) {
		res.send({error: errors[0]});
		return;
	}

	await evolvePokemon(verifier.userID, verifier.pokemon, evolveID);
	//await PokedexCommands.createOrUpdateEntry(verifier.userID, verifier.pokemon.pokemonID);
	await CandyCommands.removeCandies(verifier.userID, verifier.pokemon.pokemonID, evolveCost);
	await UserCommands.reset(verifier.userID);
	res.send({pokemon: verifier.pokemon, oldName: oldName, newName: newName});
}

async function evolvePokemon(userID, pokemon, evolveID) {
    await PokemonCommands.updatePokemonStats(userID, pokemon, evolveID);
}
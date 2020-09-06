import { applySession } from 'next-session';
const WebsiteCommands = require('../../WebsiteCommands');
const Verifier = require('../../Verifier');
const db = require('../../db');
const PokemonData = require('../../PokemonData');
const UserCommands = require('../../UserCommands');

export default async function handler(req, res) {
    await applySession(req, res);
	let verifier = new Verifier(WebsiteCommands.getUserID(req));
	
	if(!req.body.uniquePokemonID) {
		verifier.setEvolveName(req.body.choice);
		let json = await UserCommands.getJSON(verifier.userID);
		console.log(json);
		if(!isUserChoiceValid(verifier.evolveName, json.evolveIDs)) {
			res.send({error: "That isn't a valid choice."});
			return;
		}
		await verifier.setUniquePokemonID(json.uniquePokemonID);
		console.log(verifier);
	}
	else {
		await verifier.setUniquePokemonID(req.body.uniquePokemonID);
	}

	await verifier.setCandyAmount();
	
	let errors = verifier.getErrors();
	if(errors.length) {
		res.send({error: errors[0]});
		return;
	}
	
	let data = PokemonData[verifier.pokemon.pokemonID];
	let newPokemonData;
	let newName;
	let evolveID;
		
	if(Array.isArray(data.evolveID) && !verifier.evolveName) {
		data.evolveID = data.evolveID.map(el => PokemonData[el].name);
		await UserCommands.updateLastCommandJSON(verifier.userID, 'evolveChoice', {uniquePokemonID: verifier.uniquePokemonID, evolveIDs: data.evolveID});
		res.send({pokemon: verifier.pokemon, evolveIDs: data.evolveID});
		return;
	}
	else {
		evolveID = verifier.evolveName ? PokemonData.getIDFromName(verifier.evolveName) : data.evolveID;
		newPokemonData = PokemonData[evolveID];
		newName = newPokemonData.name;
	}
	let evolveCost = data.evolveCost;
	if(evolveCost > verifier.candyAmount) {
		res.send({error: `You need ${evolveCost} candy to do this!`});
		return;
	}
	
	await UserCommands.updateLastCommandJSON(verifier.userID, 'evolve', {uniquePokemonID: verifier.uniquePokemonID, evolveCost: evolveCost, evolveID: evolveID, oldName: data.name, newName: newName});
	res.send({oldName: data.name, newName: newName, candyAmount: verifier.candyAmount, evolveCost: evolveCost, pokemon: verifier.pokemon});
}

function isUserChoiceValid(choice, choices) {
	return choices.includes(choice.toLowerCase());
}
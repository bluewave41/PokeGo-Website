import { applySession } from 'next-session';
const UserCommands = require('../UserCommands');
const WebsiteCommands = require('../WebsiteCommands');
const PokemonCommands = require('../PokemonCommands');

export default async function handler(req, res) {
    await applySession(req, res);
	const userID = WebsiteCommands.getUserID(req);
	let pokemonCount = await PokemonCommands.getPokemonCount(userID);
	if(pokemonCount > 0) {
		res.send({error: "You've already received a starter Pokemon. You can't get another."});
		return;
	}
	const starterIDs = [
		{text: 'Grass Pokemon', name: 'Bulbasaur'},
		{text: 'Fire Pokemon', name: 'Charmander'},
		{text: 'Water Pokemon', name: 'Squirtle'}
	];
	await UserCommands.updateLastCommandJSON(userID, 'starter');
	res.send(starterIDs);
}
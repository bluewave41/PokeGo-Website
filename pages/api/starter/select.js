import { applySession } from 'next-session';
const PokemonUtilities = require('../PokemonUtilities');
const WebsiteCommands = require('../WebsiteCommands');
const Verifier = require('../Verifier');
const PokemonCommands = require('../PokemonCommands');
const UserCommands = require('../UserCommands');

export default async function handler(req, res) {
    await applySession(req, res);
	let verifier = new Verifier(WebsiteCommands.getUserID(req));
	verifier.setStarter(req.body.name);
	let errors = verifier.getErrors();
	if(errors.length) {
		res.send({error: errors[0]});
	}
	await UserCommands.reset(verifier.userID);
	let pokemon = PokemonUtilities.generatePokemon(verifier.starter.id, 5);
	await PokemonCommands.createPokemon(verifier.userID, pokemon);
	res.send(pokemon);
}
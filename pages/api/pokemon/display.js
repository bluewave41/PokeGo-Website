import { applySession } from 'next-session';
const PokemonCommands = require('../PokemonCommands');
const WebsiteCommands = require('../WebsiteCommands');
const Verifier = require('../Verifier');

export default async function handler(req, res) {
    await applySession(req, res);
	let verifier = new Verifier(WebsiteCommands.getUserID(req));
	await verifier.setUniquePokemonID(req.body.uniquePokemonID);
	let errors = verifier.getErrors();
	if(errors.length) {
		res.send({error: errors[0]});
		return;
	}
	let pokemon = await PokemonCommands.getDisplayPokemon(verifier.userID, verifier.uniquePokemonID);
	res.send(pokemon);
}
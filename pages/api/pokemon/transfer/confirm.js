import { applySession } from 'next-session';
const PokemonCommands = require('../../PokemonCommands');
const WebsiteCommands = require('../../WebsiteCommands');
const Verifier = require('../../Verifier');
const UserCommands = require('../../UserCommands');

export default async function handler(req, res) {
    await applySession(req, res);
	let verifier = new Verifier(WebsiteCommands.getUserID(req));
	await verifier.setUniquePokemonID(req.body.uniquePokemonID);
	let errors = verifier.getErrors();
	if(errors.length) {
		res.send({error: errors[0]});
		return;
	}
	await UserCommands.updateLastCommandJSON(verifier.userID, 'transfer', verifier.pokemon.id);
	res.send(verifier.pokemon);
}
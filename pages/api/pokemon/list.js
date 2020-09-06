import { applySession } from 'next-session';
const PokemonCommands = require('../PokemonCommands');
const WebsiteCommands = require('../WebsiteCommands');
const Verifier = require('../Verifier');

export default async function handler(req, res) {
    await applySession(req, res);
	let userID = WebsiteCommands.getUserID(req);
	let verifier = new Verifier(WebsiteCommands.getUserID(req));
	verifier.setPage(req.body.page);
	let errors = verifier.getErrors();
	if(errors.length) {
		res.send({error: errors[0]});
	}
	console.log(verifier);
	let response = await PokemonCommands.getFilteredPokemonList(verifier.userID, (verifier.page+1)*25, verifier.page, {});
	//check for 0 entries
	//check if page count too high
	res.send(response);
}
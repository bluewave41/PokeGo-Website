import { applySession } from 'next-session';
const WebsiteCommands = require('../WebsiteCommands');
const Verifier = require('../Verifier');
const db = require('../db');

export default async function handler(req, res) {
    await applySession(req, res);
	let userID = WebsiteCommands.getUserID(req);
	let verifier = new Verifier(WebsiteCommands.getUserID(req));
	await verifier.setUniquePokemonID(req.body.uniquePokemonID);
	let errors = verifier.getErrors();
	if(errors.length) {
		res.send({error: errors[0]});
	}
	let response = await makePokemonFavorite(verifier.userID, verifier.uniquePokemonID);
	res.send({favorite: response, pokemon: verifier.pokemon});
}

async function makePokemonFavorite(userID, uniquePokemonID) {
    let pokemon = await db.pokemon.findOne({
        where: {userID: userID, id: uniquePokemonID}
    });
    pokemon.update({
        favorite: db.sequelize.literal('NOT favorite')
    });
    return !pokemon.previous('favorite'); //changed value since mysql doesn't support returning
}
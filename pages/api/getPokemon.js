const DiscordOauth2 = require('discord-oauth2');
const oauth = new DiscordOauth2();
import { applySession } from 'next-session';
const db = require('../../lib/db.js');
const PokemonCommands = require('./PokemonCommands');

export default async function handler(req, res) {
	await applySession(req, res);
	if(req.session.user) {
        let pokemon = await PokemonCommands.getPokemonList(req.session.user.userID);
        res.send(pokemon);
        res.end();
	}
	else {
		res.send({text: 'Not logged in'});
		res.end();
	}
}
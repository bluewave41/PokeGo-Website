const DiscordOauth2 = require('discord-oauth2');
const oauth = new DiscordOauth2();
import { applySession } from 'next-session';
const PokemonCommands = require('./PokemonCommands');
const UserCommands = require('./UserCommands');

export default async function handler(req, res) {
    await applySession(req, res);
	if(req.session.user) {
        let info = {};
        info.currency = await UserCommands.getCurrency(req.session.user.userID);
        info.pokemonCount = await PokemonCommands.getPokemonCount(req.session.user.userID);
        res.send(info);
        res.end();
	}
	else {
		res.send({text: 'Not logged in'});
		res.end();
	}
}
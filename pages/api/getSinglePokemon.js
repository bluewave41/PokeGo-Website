import { applySession } from 'next-session';
const db = require('../../lib/db.js');
const PokemonCommands = require('./PokemonCommands');

export default async function handler(req, res) {
    await applySession(req, res);
    if(!req.body.uniqueDisplayID) {
        res.send({error: "No unique display ID given."});
        res.end();
        return;
    }
    if(!req.session.user) {
        res.send({error: "Not logged in"});
        res.end();
        return;
    }
    let pokemon = await PokemonCommands.getStrictPokemon(req.session.user.userID, req.body.uniqueDisplayID);
    if(!pokemon) {
        res.send({error: `You don't have a Pokemon with the ID ${req.body.uniqueDisplayID}`});
        res.end();
        return;
    }
    res.send(pokemon);
    res.end();
}
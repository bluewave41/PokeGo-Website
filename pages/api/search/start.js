import { applySession } from 'next-session';
const WebsiteCommands = require('../../WebsiteCommands');
const Verifier = require('../../Verifier');
const db = require('../../db');
const ItemMap = require('../../ItemMap');
const Map = require('./utilities/Map');

export default async function handler(req, res) {
    await applySession(req, res);
	let verifier = new Verifier(WebsiteCommands.getUserID(req));
	await verifier.checkStorage();
	await verifier.checkPokeBalls();
	await verifier.checkTickets();
	let errors = verifier.getErrors();
	if(errors.length) {
		res.send({error: errors[0]});
	}
	await UserCommands.updateLastCommandJSON(verifier.userID, 'search');
	await UserCommands.updateMap(verifier.userID, new Map());
	await ItemCommands.removeItem(verifier.userID, ItemMap.TRAVEL_TICKET, 1);
	res.send({pokemon: verifier.pokemon, oldName: oldName, newName: newName});
}
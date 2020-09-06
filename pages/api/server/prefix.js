import { applySession } from 'next-session';
const WebsiteCommands = require('../WebsiteCommands');
const Verifier = require('../Verifier');
const db = require('../db');

export default async function handler(req, res) {
    await applySession(req, res);
	let verifier = new Verifier(WebsiteCommands.getUserID(req));
	verifier.setPrefix(req.body.prefix);
	verifier.setServerID(req.body.serverID);
	let errors = verifier.getErrors();
	if(errors.length) {
		res.send({error: errors[0]});
	}
	await changePrefix(verifier.serverID, verifier.prefix);
	res.send(true);
}

async function changePrefix(serverID, prefix) {
    await db.server.update({
        prefix: prefix,
    }, {where: {serverID: serverID}});
}
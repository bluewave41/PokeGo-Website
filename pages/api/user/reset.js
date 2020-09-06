import { applySession } from 'next-session';
const WebsiteCommands = require('../WebsiteCommands');
const UserCommands = require('../UserCommands');

export default async function handler(req, res) {
    await applySession(req, res);
	let userID = WebsiteCommands.getUserID(req);
	await UserCommands.reset(userID);
	res.send(true);
}
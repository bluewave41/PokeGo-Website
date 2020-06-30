const DiscordOauth2 = require('discord-oauth2');
const oauth = new DiscordOauth2();
import { applySession } from 'next-session';
const UserCommands = require('./UserCommands');

export default async function handler(req, res) {
	await applySession(req, res);
	let token = await oauth.tokenRequest({
		clientId: '721674409659858965',
		clientSecret: 'JHfpaK2YRTDkdcHNdO1yZNPiq0YjbuIk',
		code: req.query.code,
		scope: 'identify',
		grantType: 'authorization_code',
		redirectUri: 'http://localhost:3000/api/authorize'
	})
    let userInfo = await oauth.getUser(token.access_token);
    userInfo.userID = await UserCommands.getUserID(userInfo.id); //set userID so we don't have to get everywhere
	req.session.user = userInfo;
	await req.session.commit();
	res.writeHead(301, {Location: '/'});
	res.end();
}
const DiscordOauth2 = require('discord-oauth2');
const oauth = new DiscordOauth2();
import { applySession } from 'next-session';
const UserCommands = require('./UserCommands');

export default async function handler(req, res) {
    await applySession(req, res);
    let redirect = process.platform == 'win32' ? 'http://localhost:3000/api/authorize' : 'https://bluewave41.xyz/api/authorize';
	let token = await oauth.tokenRequest({
		clientId: '721674409659858965',
		clientSecret: 'JHfpaK2YRTDkdcHNdO1yZNPiq0YjbuIk',
		code: req.query.code,
		scope: 'identify',
		grantType: 'authorization_code',
		redirectUri: redirect
	});
    let userInfo = await oauth.getUser(token.access_token);
    let sessionInfo = await UserCommands.getSessionInfo(userInfo.id);
    userInfo.userID = sessionInfo.userID;
    userInfo.admin = sessionInfo.admin;
	req.session.user = userInfo;
	await req.session.commit();
	res.writeHead(301, {Location: '/'});
	res.end();
}
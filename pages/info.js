import React from 'react';
import axios from 'axios';
import { applySession } from 'next-session';
import NavBar from './components/NavBar';

export default function Info(props) {
    return (
        <div>
            <NavBar discordID={props.discordID} avatarID={props.avatarID} discriminator={props.discriminator} username={props.username}/>
            <div id="content">
                <p>Currency: {props.currency}</p>
                <p>Pokemon count: {props.pokemonCount}</p>
            </div>
        </div>
    )
}

export async function getServerSideProps({ req, res }) {
    await applySession(req, res);
    let info = await axios.post(process.env.API_URL + '/api/getUserInfo', {},  {headers: req ? { cookie: req.headers.cookie } : undefined});
    if(info.data.error) {
        res.writeHead(302, {Location: '/'});
        res.end();
        return;
    }
    return {
		props: {
            discordID: req.session.user.id,
            username: req.session.user.username,
            discriminator: req.session.user.discriminator,
            avatarID: req.session.user.avatar,
            currency: info.data.currency,
            pokemonCount: info.data.pokemonCount,
		}
	}
}
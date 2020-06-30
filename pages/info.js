import React from 'react';
import axios from 'axios';
import { applySession } from 'next-session';
import NavBar from './components/NavBar';

export default function Info(props) {
    return (
        <div>
            <NavBar discordID={props.discordID} avatarID={props.avatarID}/>
            <p>Currency: {props.currency}</p>
            <p>Pokemon count: {props.pokemonCount}</p>
        </div>
    )
}

export async function getServerSideProps({ req, res }) {
    await applySession(req, res);
    let info = await axios.post('http://localhost:3000/api/getUserInfo', {},  {headers: req ? { cookie: req.headers.cookie } : undefined});
    console.log(info);
    return {
		props: {
            discordID: req.session.user.id,
            username: req.session.user.username,
            avatarID: req.session.user.avatar,
            currency: info.data.currency,
            pokemonCount: info.data.pokemonCount,
		}
	}
}
import React, { useState } from 'react';
import { applySession } from 'next-session';
import NavBar from './components/NavBar';
import axios from 'axios';

export default function Tools(props) {
    const [serverID, setServerID] = useState('');
    const [message, setMessage] = useState('');
    const onClick = async (e) => {
        if(!/^\d+$/.test(serverID) || serverID == '') {
            setMessage("You either didn't enter a server ID or you entered an invalid server ID. Server ID's only contain numbers.");
            return;
        }
        let response = await axios.post('/api/tools/getPrefix', {serverID: serverID});
        if(response.data) {
            setMessage(`This servers prefix is ${response.data}`);
        }
        else {
            setMessage(`This server doesn't use PokeGo.`);
        }
    }
    const onChange = (e) => {
        setServerID(e.target.value);
    }
    return (
        <div>
            <NavBar discordID={props.discordID} avatarID={props.avatarID} discriminator={props.discriminator} username={props.username}/>
            <div id="content">
                <p>Find prefix for server</p>
                <input type="text" onChange={onChange} placeholder="Server ID"></input>
                <button onClick={onClick}>Find</button>
                <div id="message">{message}</div>
            </div>
            <style jsx>{`
                input {
                    border: 1px solid silver;
                    margin-bottom: 20px;
                }
                input:focus {
                    outline-width: 0;
                    outline-offset: 0;
                     border: 1px solid aqua;
                    background-color: #222;
                }
            `}</style>
        </div>
    )
}
export async function getServerSideProps({ req, res }) {
    await applySession(req, res);
    if(!req.session.user) {
        return {props: {}};
    }
    return {
		props: {
            discordID: req.session.user.id,
            username: req.session.user.username,
            discriminator: req.session.user.discriminator,
            avatarID: req.session.user.avatar,
		}
	}
}
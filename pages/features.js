import React from 'react';
import axios from 'axios';
import { applySession } from 'next-session';
import NavBar from './components/NavBar';

export default function Info(props) {
    return (
        <div>
            <NavBar discordID={props.discordID} avatarID={props.avatarID} discriminator={props.discriminator} username={props.username}/>
            <main>
				<h1>Features</h1>
				<h3>151 Pokemon</h3>
				<p>Contains the original 151 Pokemon. More will be released later in batches to make it easier to gather candy for new Pokemon.</p>
				<br/>
				<h3>Full battle experience</h3>
				<p>All moves Pokemon can learn by levelling up have been added for a full battle experience.</p>
				<br/>
				<h3>Shadow Pokemon</h3>
				<p>Team Rocket is here and they've brought sinister looking Shadow Pokemon! Maybe defeating them will let you liberate them?</p>
            </main>
			<style jsx>{`
                h1 {
                    text-align: center;
                }
            `}</style>
        </div>
    )
}
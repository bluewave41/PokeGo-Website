import React, { useState } from 'react';
import { applySession } from 'next-session';
import axios from 'axios';
import PokemonComponent from './components/PokemonComponent';
import NavBar from './components/NavBar';
import PokemonInfoComponent from './components/PokemonInfoComponent';

export default function Pokemon(props) {
    const [pokemonInfo, setPokemonInfo] = useState(0);
    const onClick = (pokemonInfo) => {
        setPokemonInfo(pokemonInfo);
    }
    if(pokemonInfo) {
        return (
            <div>
                <NavBar discordID={props.discordID} avatarID={props.avatarID}/>
                <PokemonInfoComponent pokemonInfo={pokemonInfo}/>
            </div>
        )
    }
    else {
        return (
            <div className="container">
                <NavBar discordID={props.discordID} avatarID={props.avatarID}/>
                <main>
                    <div className="grid">
                        {props.pokemon.map(function(el) {
                            return <PokemonComponent pokemonInfo={el} onClick={onClick}/>
                        })}
                    </div>
                </main>
            </div>
        )
    }
}

export async function getServerSideProps({ req, res }) {
	await applySession(req, res);
    let pokemon = await axios.post('http://localhost:3000/api/getPokemon', {}, {headers: req ? { cookie: req.headers.cookie } : undefined});
	return {
		props: {
            discordID: req.session.user.id,
            avatarID: req.session.user.avatar,
            username: req.session.user.username,
            pokemon: pokemon.data
		}
	}
}
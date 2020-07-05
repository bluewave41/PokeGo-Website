import React, { useState } from 'react';
import { applySession } from 'next-session';
import axios from 'axios';
import PokemonComponent from './components/PokemonComponent';
import NavBar from './components/NavBar';
import PokemonInfoComponent from './components/PokemonInfoComponent';

export default function Pokemon(props) {
    const [pokemonInfo, setPokemonInfo] = useState(0);
    const [filterName, setFilterName] = useState('');

    const onClick = (pokemonInfo) => {
        setPokemonInfo(pokemonInfo);
    }
    if(props.pokemon.length == 0) {
        return (
            <div>
            <NavBar discordID={props.discordID} avatarID={props.avatarID} discriminator={props.discriminator} username={props.username}/>
                <p>Hmm, you don't seem to have any Pokemon yet.</p>
            </div>
        )
    }
    if(pokemonInfo) {
        return (
            <div>
            <NavBar discordID={props.discordID} avatarID={props.avatarID} discriminator={props.discriminator} username={props.username}/>
                <PokemonInfoComponent pokemonInfo={pokemonInfo} />
            </div>
        )
    }
    else {
        return (
            <div className="container">
            <NavBar discordID={props.discordID} avatarID={props.avatarID} discriminator={props.discriminator} username={props.username}/>
                <main>
                    <div>
                        <input type="text" placeholder='Filter' value={filterName} onChange={(e) => setFilterName(e.target.value.toLowerCase())}></input>
                    </div>
                    <div className="grid">
                        {props.pokemon.map(function(el) {
                            if(el.name.toLowerCase().includes(filterName)) {
                                return <PokemonComponent pokemonInfo={el} onClick={onClick}/>
                            }
                        })}
                    </div>
                </main>
                <style jsx>{`
                    div {
                        text-align: center;
                    }
                    input {
                        text-align: center;
                        border-radius: 25%;
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
}

export async function getServerSideProps({ req, res }) {
	await applySession(req, res);
    let pokemon = await axios.post(process.env.API_URL + '/api/getPokemon', {}, {headers: req ? { cookie: req.headers.cookie } : undefined});
    if(pokemon.data.error) {
        res.writeHead(302, {Location: '/'});
        res.end();
    }
    return {
		props: {
            discordID: req.session.user.id,
            discriminator: req.session.user.discriminator,
            avatarID: req.session.user.avatar,
            username: req.session.user.username,
            pokemon: pokemon.data
		}
	}
}
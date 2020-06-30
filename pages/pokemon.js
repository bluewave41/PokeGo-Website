import React, { useState } from 'react';
import { applySession } from 'next-session';
import axios from 'axios';
import PokemonComponent from './components/PokemonComponent';
import NavBar from './components/NavBar';
import PokemonInfoComponent from './components/PokemonInfoComponent';

export default function Pokemon(props) {
    const [pokemonInfo, setPokemonInfo] = useState(0);
    const [filterName, setFilterName] = useState('');
    console.log(filterName);
    const onClick = (pokemonInfo) => {
        setPokemonInfo(pokemonInfo);
    }
    const goBack = () => {
        setPokemonInfo(0);
    }
    if(pokemonInfo) {
        return (
            <div>
                <NavBar discordID={props.discordID} avatarID={props.avatarID}/>
                <PokemonInfoComponent pokemonInfo={pokemonInfo} onClick={goBack}/>
            </div>
        )
    }
    else {
        return (
            <div className="container">
                <NavBar discordID={props.discordID} avatarID={props.avatarID}/>
                <main>
                    <div>
                        <input type="text" placeholder="Filter" onChange={(e) => setFilterName(e.target.text)}></input>
                    </div>
                    <div className="grid">
                        {props.pokemon.map(function(el) {
                            if(el.name.includes(filterName)) {
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
                    }
                    input:focus {
                        outline-width: 0;
                    }
                `}</style>
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
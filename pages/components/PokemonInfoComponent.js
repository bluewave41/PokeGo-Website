import React from 'react';

const PokemonInfoComponent = (props) => {
    return (
        <div>
            <h2>{props.pokemonInfo.name}</h2>
            <img src={props.pokemonInfo.thumbnail} />
            <p>ID: {props.pokemonInfo.id}</p>
            <p>Active: {props.pokemonInfo.active}</p>
            <p>Level: {props.pokemonInfo.level}</p>
            <br/>
            <p>HP: {props.pokemonInfo.hp}</p>
            <p>Attack: {props.pokemonInfo.atk}</p>
            <p>Defense: {props.pokemonInfo.def}</p>
            <p>Sp. Atk: {props.pokemonInfo.spatk}</p>
            <p>Sp. Def: {props.pokemonInfo.spdef}</p>
            <p>Speed: {props.pokemonInfo.speed}</p>
            <br/>
            <p>HP IV: {props.pokemonInfo.hpIV}</p>
            <p>Attack IV: {props.pokemonInfo.atkIV}</p>
            <p>Defense IV: {props.pokemonInfo.defIV}</p>
            <p>Sp. Atk IV: {props.pokemonInfo.spatkIV}</p>
            <p>Sp. Def IV: {props.pokemonInfo.spdefIV}</p>
            <p>Speed IV: {props.pokemonInfo.speedIV}</p>
            <p>Total IV: {props.pokemonInfo.totalIV}%</p>
            <style jsx>{`
                p {
                    margin: 0;
                }
            `}</style>
        </div>
    )
}

export default PokemonInfoComponent;
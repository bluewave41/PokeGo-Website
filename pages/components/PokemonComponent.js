import React from 'react';
import Link from 'next/link';

const PokemonComponent = (props) => {
    if(!props.pokemonInfo) {
        return <div></div>
    }
    return (
        <div>
            <h2>{props.pokemonInfo.name}</h2>
            <Link href='/pokemon/[id]' as={`/pokemon/${props.pokemonInfo.id}`}><img src={props.pokemonInfo.thumbnail} /></Link>
        </div>
    )
}

export default PokemonComponent;
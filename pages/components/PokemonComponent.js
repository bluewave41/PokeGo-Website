import React from 'react';
import Link from 'next/link';

const PokemonComponent = (props) => {
    const onClick = () => {
        props.onClick(props.pokemonInfo);
    }
    return (
        <div>
            <h2>{props.pokemonInfo.name}</h2>
            <img src={props.pokemonInfo.thumbnail} onClick={onClick} />
        </div>
    )
}

export default PokemonComponent;
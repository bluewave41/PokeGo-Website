import React from 'react';
import styles from "./PokemonInfoComponent.module.css"

const PokemonInfoComponent = (props) => {
    return (
        <div>
            <div className={styles.pokemoninfobox}>
            <h2>{props.pokemonInfo.name}</h2>
            <img src={props.pokemonInfo.thumbnail} id={styles.pokemonimage}/>
            <p id={styles.pokemoninfo}>ID: {props.pokemonInfo.id}<br/>
            Active: {props.pokemonInfo.active}<br/>
            Level: {props.pokemonInfo.level}</p>
            </div>
            <br/>
            <div className={styles.statsbox}>
            <h2 class={styles.stativtitle}>Stats</h2>
            <p class={styles.stativtextleft}>HP: {props.pokemonInfo.hp}<br/>
            Attack: {props.pokemonInfo.atk}<br/>
            Defense: {props.pokemonInfo.def}</p>
            <p class={styles.stativtextright}>Sp. Atk: {props.pokemonInfo.spatk}<br/>
            Sp. Def: {props.pokemonInfo.spdef}<br/>
            Speed: {props.pokemonInfo.speed}</p>
            </div>
            <br/>
            <div className={styles.ivsbox}>
            <h2 class={styles.stativtitle}>IVs</h2>
            <p class={styles.stativtextleft}>HP IV: {props.pokemonInfo.hpIV}<br/>
            Attack IV: {props.pokemonInfo.atkIV}<br/>
            Defense IV: {props.pokemonInfo.defIV}</p>
            <p class={styles.stativtextright}>Sp. Atk IV: {props.pokemonInfo.spatkIV}<br/>
            Sp. Def IV: {props.pokemonInfo.spdefIV}<br/>
            Speed IV: {props.pokemonInfo.speedIV}</p>
            <h2 id={styles.totaliv}>Total IV: {props.pokemonInfo.totalIV}%</h2>
            </div>
        </div>
    )
}

export default PokemonInfoComponent;
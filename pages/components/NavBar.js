import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';
import AvatarComponent from './AvatarComponent';

const NavBar = (props) => {
    let element = props.discordID ? <AvatarComponent discordID={props.discordID} avatarID={props.avatarID} /> : null;
    return (
        <div>
            <div id={styles.tabs}>
                <img src="/avatar.png" alt="PokeGo Logo" />
                <Link href='/'><a>Home</a></Link>
                <Link href='/pokemon'><a>Pokemon</a></Link>
                <Link href='/info'><a>Info</a></Link>
                {element}
            </div>
            <hr/>
        </div>
    )
}

export default NavBar;
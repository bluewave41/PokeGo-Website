import React from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';
import AvatarComponent from './AvatarComponent';
import LogoComponent from './LogoComponent';

const NavBar = (props) => {
    let link;
    if(!props.avatarID) {
        link = `https://cdn.discordapp.com/embed/avatars/${props.discriminator%5}.png`
    }
    else {
        link = `https://cdn.discordapp.com/avatars/${props.discordID}/${props.avatarID}`;
    }
    let element = props.discordID ? <AvatarComponent link={link} username={props.username}/> : null;
    let tabs = [
        {href: '/', text: 'Home'},
    ];
    if(props.discordID) {
        tabs.push({href:'/pokemon', text: 'Pokemon'});
        tabs.push({href: '/info', text: 'Info'});
        tabs.push({href: '/bugreports', text: 'Bug Reports'});
    }
    tabs.push({href: '/help', text: 'Help'});
    tabs.push({href: '/tools', text: 'Tools'});
    if(!props.discordID) {
        if(process.platform != 'win32') {
            tabs.push({anchor: true, href: 'https://discord.com/api/oauth2/authorize?client_id=721674409659858965&redirect_uri=https%3A%2F%2Fbluewave41.xyz%2Fapi%2Fauthorize&response_type=code&scope=identify', text: 'Login'});
        }
        else {
            tabs.push({anchor: true, href: 'https://discord.com/api/oauth2/authorize?client_id=721674409659858965&redirect_uri=https%3A%2F%2Fbluewave41.xyz%2Fapi%2Fauthorize&response_type=code&scope=identify', text: 'Login'});
            tabs.push({anchor: true, href: 'https://discord.com/api/oauth2/authorize?client_id=721674409659858965&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauthorize&response_type=code&scope=identify', text: 'Login'});
        }
    }

    return (
        <div>
            <div id={styles.tabs}>
                <LogoComponent />
                {tabs.map(function(el, index) {
                    if(el.anchor) {
                        return <a key={index} href={el.href}>{el.text}</a>

                    }
                    else {
                        return <Link key={index} href={el.href}><a>{el.text}</a></Link>
                    }
                })}
                {element}
            </div>
            <hr/>
            <style jsx>{`
                hr {
                    margin-bottom: 20px;
                }
            `}</style>
        </div>
    )
}

export default NavBar;
import React from 'react';
import styles from './SideBar.module.css';

const SideBar = (props) => {
	const commands = ['Active', 'Bug Report', 'Catch', 'Daily', 'Display', 'Evolve', 'Favorite', 'Help', 'Info', 'Inventory',
					  'List', 'Nickname', 'Pokedex', 'Prefix', 'Quit', 'Search', 'Shop', 'Starter', 'Trade',
					  'Tradelist', 'Transfer', 'Use'];
					  
	const changePage = event => {
		props.setPage(event.target.text);
	}
	return(
		<div className={styles.sidenav}>
			<h2 className={styles.header}>Commands</h2>
			<hr></hr>
			{commands.map((el, index) => <a href="#" key={index} onClick={changePage}>{el}</a>)}
		</div>
	);
}

export default SideBar
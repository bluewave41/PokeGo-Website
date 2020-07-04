import React from 'react';
import styles from './SideBar.module.css';

const SideBar = (props) => {
	const commands = ['Active', 'Catch', 'Daily', 'Display', 'Evolve', 'Favorite', 'Help', 'Info', 'Inventory',
					  'List', 'Nickname', 'Pokedex', 'Prefix', 'Quit', 'Search', 'Shop', 'Starter', 'Trade',
					  'Tradelist', 'Transfer', 'Use'];
					  
	const changePage = event => {
		props.setPage(event.target.text);
	}
	return(
		<div className={styles.sidenav}>
			{commands.map((el) => <a href="#" onClick={changePage}>{el}</a>)}
		</div>
	);
}

export default SideBar
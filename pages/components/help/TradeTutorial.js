import React, { useState, useEffect } from 'react';

const page1 = () => {
	return (
		<div>
			<h1>Starting a trade</h1>
			<p>To begin a trade enter the following command: !trade @mention pokemonID</p>
			<p>This will add the trade to your outgoing !tradelist and the mentioned persons incoming !tradelist.</p>
		</div>
	)
}

const page2 = () => {
	return (
		<div>
			<h1>Offering a Pokemon</h1>
			<p>Once a trade has been started the other player must offer a Pokemon. They can do so with !trade tradeID pokemonID</p>
			<p>Example: !trade 1 327</p>
			<p>This will add their Pokemon to the the trade.</p>
		</div>
	)
}

const page3 = () => {
	return (
		<div>
			<h1>Confirming the trade</h1>
			<p>Both players now need to confirm the trade with !trade tradeID confirm</p>
			<p>Once a player has confirmed a trade a checkmark will appear next the their Pokemons name in the !tradelist menu.</p>
			<p>Once both players have confirmed their trade the trade will be performed and the Pokemon will swap owners.</p>
		</div>
	)
}

const page4 = () => {
	return (
		<div>
			<h1>Deleting trades</h1>
			<p>At any point either player can use !trade tradeID delete to remove the trade from both players !tradelist.</p>
		</div>
	)
}

const TradeTutorial = () => {
	const pages = {
		1: page1,
		2: page2,
		3: page3,
		4: page4,
	}
	const [page, setPage] = useState(pages[1]);
	const [index, setIndex] = useState(1);
	
	useEffect(() => {
		setPage(pages[index]);
	}, [index]);

	const changePage = event => {
		switch(event.target.text) {
			case 'Previous':
				if(index > 1) {
					setIndex(index-1);
				}
			break;
			case 'Next':
			if(index < 4) {
				setIndex(index+1);
			}
			break;
		}	
	}
	return (
		<div>
			{page}
			<div className="changePage">
				<a href="#" onClick={changePage}>Previous</a><a href="#" onClick={changePage}>Next</a>
			</div>
		</div>
	)
}

export default TradeTutorial;
import React, { useState, useEffect } from 'react';

const page1 = () => {
	return (
		<div>
			<p>To begin searching ensure you have the following:</p>
			<p>- A Poke Ball</p>
			<p>- A Travel Ticket</p>
			<p>To begin type in !search to bring up a map of entities. Doing this will consume your Travel Ticket but you can get it back later.</p>
			<img src='/tutorial1.png' />
			
			<p>The top of the map shows you how many action chances you have and the available encounters.</p>
			<p>Action Chances are the number of Pokemon you can catch and items you can pick up. When it hits 0 you'll get tired and go home.</p>
		</div>
	)
}

const page2 = () => {
	return (
		<div>
			<p>To start an encounter simply type in the number corresponding to the Pokemon you would like to catch.</p>
			<p>This will consume one of your action chances and open the encounter map.</p>
			<img src='/tutorial2.png'/>
			<p>Here you can see the encounter map. From here your goal is to either trap the Pokemon so it can't move or use !catch to attempt to catch it.</p>
		</div>
	)
}

const page3 = () => {
	return (
		<div>
			<p>You can block off a square by sending coordinates in the form of row column as shown below.</p>
			<img src='/tutorial3.png'/>
            <p>You can also send coordinates in the form of x.y (2.4) which should help mobile users.</p>
            <br/>
			<p>This blocks a square and Pinsir can no longer move there.</p>
			<p>Your chance of success using !catch depends on how many squares a Pokemon can move to.</p>
			<p>In the above image Pinsir can move to a total of 22 squares.</p>
			<img src='/tutorial4.png'/>
			<p>In this image Pinsir can only move to 3 squares drastically increasing the chances of !catch succeeding.</p>
		</div>
	)
}

const page4 = () => {
	return (
		<div>
			<p>One your first catch during an adventure you'll be given your travel ticket back.</p>
			<p>Using search (without a prefix) will show the map again. If you have extra action chances you'll be able to start another encounter or grab an item.</p>
		</div>
	)
}

const SearchTutorial = () => {
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
			<div className="center"><a href="#" onClick={changePage}>Previous</a><a href="#" onClick={changePage}>Next</a></div>
            <style jsx>{`
                .center {
                    display: flex;
                    justify-content: space-around;
                }
            `}</style>
		</div>
	)
}

export default SearchTutorial;
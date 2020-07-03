import React from 'react';

const SearchComponent = (props) => {
	const setPage = event => {
		props.setPage('Tutorial');
	}
	return (
		<div>
			<p>Brings you to a new area to search for Pokemon and Items</p>
			<p>Usage: !search</p>
			<h4><a href="#" onClick={setPage}>Tutorial</a></h4>
		</div>
	)
}

export default SearchComponent;
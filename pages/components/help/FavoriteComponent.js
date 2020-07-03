import React from 'react';

const FavoriteCommand = () => {
	return (
		<div>
			<p>Adds a Pokemon to your favorite list.</p>
			<p>Usage: !favorite [pokemonID]</p>
			<p>Notes: </p>
			<ul>
				<li>Favorite Pokemon cannot be transferred</li>
			</ul>
		</div>
	)
}

export default FavoriteCommand;
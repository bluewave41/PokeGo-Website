import React from 'react';

const CatchCommand = () => {
	return (
		<div>
			<p>Use a Pokeball to attempt to catch the encountered Pokemon</p>
			<p>Usage: !catch</p>
			<h4>Notes</h4>
			<ul>
				<li>Can only be used while in an encounter with !search</li>
				<li>Uses a Pokeball on each attempt</li>
				<li>Chances increase with the fewer number of spaces a Pokemon can move to</li>
			</ul>
		</div>
	)
}

export default CatchCommand;
import React from 'react';

const CatchCommand = () => {
	return (
		<div>
			<p>Use a Pokeball to attempt to catch the encountered Pokemon</p>
			<p>Usage: !catch</p>
			<h4>Notes</h4>
            <br/>
			<p>Can only be used while in an encounter with !search</p>
			<p>Uses a Pokeball on each attempt</p>
			<p>Chances increase with the fewer number of spaces a Pokemon can move to</p>
		</div>
	)
}

export default CatchCommand;
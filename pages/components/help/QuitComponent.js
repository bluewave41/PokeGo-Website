import React from 'react';

const QuitComponent = () => {
	return (
		<div>
			<p>Quits either an encounter taking you back to the search screen or leaves a search early.</p>
			<p>Usage: !quit</p>
            <br/>
            <h4>Notes</h4>
            <p>You must have started an adventure or be in an encounter to use this.</p>
		</div>
	)
}

export default QuitComponent;
import React from 'react';

const PrefixComponent = () => {
	return (
		<div>
			<p>Changes the prefix of the bot for the server the command is run in.</p>
			<p>Usage: !prefix [new prefix]</p>
			<p>Examples: !prefix p!, !prefix !</p>
			<h4>Notes</h4>
			<ul>
				<li>Requires Manage Guild permissions</li>
			</ul>
		</div>
	)
}

export default PrefixComponent;
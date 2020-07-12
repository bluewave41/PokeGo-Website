import React from 'react';

const DailyComponent = () => {
	return (
		<div>
			<p>Gives you a daily bonus of credits each day you play.</p>
			<p>Usage: !daily</p>
			<h4>Notes</h4>
			<ul>
				<li>Starts at 100 credits</li>
				<li>Each consecutive day increases by 50 credits</li>
                <li>Gives a free travel ticket</li>
			</ul>
		</div>
	)
}

export default DailyComponent;
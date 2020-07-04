import React from 'react';

const BugReportComponent = () => {
	return (
		<div>
			<p>Submits a bug report. These can be viewed in the bug reports tab.</p>
			<p>Usage: !bugreport [message]</p>
			<h4>Notes</h4>
			<ul>
				<li>Message must be 200 character or less.</li>
				<li>Message can't be empty.</li>
			</ul>
		</div>
	)
}

export default BugReportComponent;
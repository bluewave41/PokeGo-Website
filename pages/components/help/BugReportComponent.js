import React from 'react';

const BugReportComponent = () => {
	return (
		<div>
			<p>Submits a bug report. These can be viewed in the bug reports tab.</p>
			<p>Usage: !bugreport [message]</p>
            <br/>
			<h4>Notes</h4>
			<p>Message must be 200 character or less.</p>
			<p>Message can't be empty.</p>
		</div>
	)
}

export default BugReportComponent;
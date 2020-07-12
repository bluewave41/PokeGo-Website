import React from 'react';

const ListComponent = () => {
	return (
		<div>
			<p>Shows you a list of all your Pokemon. 25 Pokemon are shown per page.</p>
			<p>Usage: !list (page number)</p>
			<h4>Flags</h4>
			<p>-iv&lt;90 | shows your Pokemon with a total IV of less than 90.</p>
			<p>-iv&gt;90 | shows your Pokemon with a total IV of greater than 90.</p>
			<p>-name=bulbasaur | shows all of your Bulbasaurs.</p>
			<p>-favorite | shows your favorite Pokemon.</p>
			<h4>Examples</h4>
			<p>!list -iv&lt;90</p>
			<p>!list -iv&lt;90 2 (shows page 2)</p>
			<p>!list -favorite</p>
			<p>!list -favorite 2 (shows page 2</p>
		</div>
	)
}

export default ListComponent;
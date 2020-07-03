import React from 'react';

const ShopComponent = () => {
	return (
		<div>
			<p>Opens the shop menu where you can buy and sell items.</p>
			<h4>Usages</h4>
			<ul>
				<li>!shop</li>
				<li>!shop buy [itemname] (amount)</li>
				<li>!shop sell [itemname] (amount)</li>
			</ul>
			<p>The item name simply has to be part of the name displayed in the shop so you can do for example:</p>
			<ul>
				<li>!shop buy poke 1</li>
				<li>!shop buy tick 1</li>
			</ul>
		</div>
	)
}

export default ShopComponent;
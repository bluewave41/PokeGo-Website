import React from 'react';

const ShopComponent = () => {
	return (
		<div>
			<p>Opens the shop menu where you can buy and sell items.</p>
            <br/>
			<h4>Usages</h4>
			<p>!shop</p>
			<p>!shop buy [itemname] (amount)</p>
			<p>!shop sell [itemname] (amount)</p>
            <br/>
			<p>The item name simply has to be part of the name displayed in the shop so you can do for example:</p>
			<p>!shop buy poke 1</p>
			<p>!shop buy tick 1</p>
		</div>
	)
}

export default ShopComponent;
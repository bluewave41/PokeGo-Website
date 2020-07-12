import React from 'react';

const TradeComponent = (props) => {
	const setPage = event => {
		props.setPage('TradeTutorial');
	}
	return (
		<div>
			<p>Allows you to trade Pokemon with other players.</p>
			<h4><a href="#" onClick={setPage}>Tutorial</a></h4>
		</div>
	)
}

export default TradeComponent;
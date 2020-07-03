import React from 'react';

const WelcomeComponent = () => {
	return (
		<div>
			<h1>PokeGo Commands</h1>
			<p>Welcome to the PokeGo commands list. Select a command from the left sidebar to learn more about it.</p>
			<p>Everything inside () is optional and everything inside [] is required for a command to work.</p>
			<p>If a pokemonID is optional and is not given it will default to your active Pokemon.</p>
            <p>The prefix is assumed to be !. This differs from server to server.</p>
            <style jsx>{`
                h1 {
                    text-align: center;
                }
            `}</style>
		</div>
	)
}

export default WelcomeComponent;
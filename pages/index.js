import { applySession } from 'next-session';
import NavBar from './components/NavBar';

export default function Home(props) {
	return (
		<div className="container">
            <NavBar discordID={props.discordID} avatarID={props.avatarID} discriminator={props.discriminator} username={props.username}/>

			<main>
                <h1>PokeGo</h1>
				<br/>
                <h2>What makes this different from other Pokemon bots?</h2>
                <div className="column">
                    <img src='/fence.svg'/>
                    <h3>Herd Based Catching</h3>
                    <p>No fighting over who can type in a Pokemons name the fastest. Catch Pokemon in an engaging game you can play whenever you want
                        separate from other users.
                    </p>
                </div>
                <div className="column">
                    <img src='/candy.svg'/>
                    <h3>Candy Based Levelling</h3>
                    <p>Earn candy by catching Pokemon and use them to powerup your Pokemon. No chatting required.</p>
                </div>
                <div className="column">
                    <img src='/web.png'/>
                    <h3>Online Dashboard</h3>
                    <p>Manage your Pokemon, items and more directly from the website.</p>
                </div>

			</main>
            <style jsx>{`
                h1 {
                    text-align: center;
                }
                h2 {
                    text-align: center;
                    padding-bottom: 50px;
                }
                p {
                    text-align: center;
                }
                .column {
                    float: left;
                    width: 33.33%;
                    text-align: center;
                  }
                .row:after {
                    content: "";
                    display: table;
                    clear: both;
                }
                img {
                    width: 100px;
                    height: 100px;
                }
                @media screen and (max-width: 600px) {
                    .column {
                        width: 100%;
                        margin-top: 50px;
                    }
                }
            `}</style>
		</div>
	)
}

export async function getServerSideProps({ req, res }) {
    await applySession(req, res);
    if(!req.session.user) {
        return {props: {}};
    }
    return {
        props: {
            discordID: req.session.user.id,
            discriminator: req.session.user.discriminator,
            avatarID: req.session.user.avatar,
            username: req.session.user.username,
        }
    }
}
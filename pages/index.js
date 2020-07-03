import Head from 'next/head';
import { applySession } from 'next-session';
import NavBar from './components/NavBar';

export default function Home(props) {
	return (
		<div className="container">
            <NavBar discordID={props.discordID} avatarID={props.avatarID} discriminator={props.discriminator} username={props.username}/>

			<main>
                <h1>PokeGo</h1>
				<br/>
                <p>This page is pretty plain right now until I can figure out what to put here!</p>
			</main>
            <style jsx>{`
                h1 {
                    text-align: center;
                }
                p {
                    text-align: center;
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
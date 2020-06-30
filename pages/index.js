import Head from 'next/head';
import AvatarComponent from './components/AvatarComponent';
import { applySession } from 'next-session';
import NavBar from './components/NavBar';

export default function Home(props) {
    let element = props.username ? `You're logged in as ${props.username}` : '';
	return (
		<div className="container">
            <NavBar discordID={props.discordID} avatarID={props.avatarID}/>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
                <p>Welcome to PokeGo!</p>
                <p>{element}</p>
				<br/>
				<a href='https://discord.com/api/oauth2/authorize?client_id=721674409659858965&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauthorize&response_type=code&scope=identify'>Login</a>
			</main>
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
            avatarID: req.session.user.avatar,
            username: req.session.user.username,
        }
    }
}
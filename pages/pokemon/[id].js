import { useRouter } from 'next/router';
import PokemonInfoComponent from '../components/PokemonInfoComponent';
import { applySession } from 'next-session';
import axios from 'axios';
import NavBar from '../components/NavBar';

export default function Pokemon(props) {
    const router = useRouter();
    const { id } = router.query;
    let component = props.pokemonInfo.error ? <p>{props.pokemonInfo.error}</p> : <PokemonInfoComponent pokemonInfo={props.pokemonInfo}/>;
    return (
        <div>
            <NavBar discordID={props.discordID} avatarID={props.avatarID} discriminator={props.discriminator} username={props.username}/>
            <div id="content">
                {component}
            </div>
        </div>
    ) 
}

export async function getServerSideProps({req, res, query}) {
    await applySession(req, res);
    if(!req.session.user) {
        return {props: {}};
    }
    let response = await axios.post(process.env.API_URL + '/api/getSinglePokemon', {uniqueDisplayID: query.id}, {headers: req ? { cookie: req.headers.cookie } : undefined});
    return {
        props: {
            discordID: req.session.user.id,
            discriminator: req.session.user.discriminator,
            avatarID: req.session.user.avatar,
            username: req.session.user.username,
            pokemonInfo: response.data
        }
    }
}

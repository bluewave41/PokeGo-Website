import './styles.css'
import NavBar from './components/NavBar';
import { applySession } from 'next-session';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
                <Component {...pageProps} />
        </>
    )
}
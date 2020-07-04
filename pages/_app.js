import './styles.css'
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
        	<Head>
				<title>PokeGo</title>
				<link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Official Pokego website"></meta>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
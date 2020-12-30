import Head from 'next/head'
import Link from 'next/link'
import dynamic from "next/dynamic";
import { FiPlus } from 'react-icons/fi'
import { Container } from '../../styles/pages/app';

const PhotographerMap: React.FC = () => {

    const MapWithNoSSR = dynamic(() => import("../components/map"), {
        loading: () => <div style={{ color: 'black', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <h1>
                Map is loading...
            </h1>
        </div>,
        ssr: false
    });

    return (
        <>
            <Head>
                <title>Photographer Map</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <aside>
                    <header>
                        <img src="map-marker.svg" alt="logo-marker" />
                        <h1>
                            Escolha um <br /> fotógrafo no <br /> mapa
                        </h1>
                        <span>
                            Os fotógrafos estão aguardando <br /> o seu chamado
                        </span>
                    </header>
                    <footer className="location">
                        <h1>Teresina</h1>
                        <span>Piauí</span>
                    </footer>
                </aside>
                <MapWithNoSSR />
                <Link href="/">
                    <FiPlus className="create-photographer" />
                </Link>
            </Container>
        </>
    );
}

export default PhotographerMap;
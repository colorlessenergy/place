import Head from 'next/head';
import Link from 'next/link';

import { usePixelsContext } from '../shared/contexts/pixelsContext';
import CanvasLayerTwo from '../shared/components/CanvasLayerTwo';

const COLORS = [
    '#222222',
    '#888888',
    '#E4E4E4',
    '#FFFFFF',
    '#E50000',
    '#A06A42',
    '#E59500',
    '#E5D900',
    '#02BE01',
    '#94E044',
    '#0000EA',
    '#0083C7',
    '#00D3DD',
    '#820080',
    '#CF6EE4',
    '#FFA7D1'
];

export default function Home() {
    const { pixels } = usePixelsContext();
    return (
        <div>
            <Head>
                <title>place - landing page</title>
                <meta name="description" content="place - landing page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="landing-page-container dark mh-100">
                <div>
                    <header className="container">
                        <div className="header-left">
                            <div>
                                <h1>conquer and protect art</h1>
                                <p>place a pixel every 60 seconds</p>
                            </div>

                            <Link href="/">
                                <a className="place-button header-cta p-2 fs-2 t-center">
                                    start placing
                                </a>
                            </Link>
                        </div>

                        <CanvasLayerTwo pixels={pixels} />
                    </header>
                </div>

                <section className="bg-color-pink">
                    <div className="container features p-2">
                        <div>
                            <div className="fw-700">colors</div>

                            <p>16 colors and endless options</p>
                        </div>

                        <div>
                            <div className="fw-700">work together</div>
                            <p>groups are stronger than individuals</p>
                        </div>
                    </div>
                </section>

                <div className="colors">
                    {COLORS.map(color => {
                        return (
                            <div
                                className="colors__square"
                                style={{ backgroundColor: color }}
                                key={color}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

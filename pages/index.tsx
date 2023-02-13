import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Theme, Color } from '@adobe/leonardo-contrast-colors';
import { KeyColourPicker } from '../components/KeyColourPicker';
import { ColourTable } from '../components/ColourTable';
import styles from '../styles/Home.module.css';

const defaultColour = '#aaa';

export default function Home() {
    const [keyColours, setKeyColours] = useState([defaultColour]);
    const [theme, setTheme] = useState(null);

    function addKeyColour() {
        setKeyColours((keyColours) => [...keyColours, defaultColour]);
    }

    function removeKeyColour(index: number) {
        setKeyColours((keyColours) => {
            const temp = [...keyColours];
            temp.splice(index, 1);
            return temp;
        });
    }

    function updateKeyColour(index: number, value: string) {
        setKeyColours((keyColours) => {
            const temp = [...keyColours];
            temp[index] = value;
            return temp;
        });
    }

    function calculate() {
        const fg = new Color({
            name: 'foreground',
            colorKeys: keyColours,
            colorspace: 'OKLCH',
            ratios: [1.05, 1.12, 1.33, 1.94, 3.0, 4.52, 6.6, 10.3, 15.0],
        });

        const theme = new Theme({
            colors: [fg],
            backgroundColor: '#FFFFFF',
            lightness: 100,
        });

        setTheme(theme);
    }

    useEffect(() => {
        calculate();
    }, [keyColours]);

    return (
        <>
            <Head>
                <title>OKLCH Theming</title>
                <meta
                    name="description"
                    content="Generating colour palettes with OKLCH and Leonardo"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <KeyColourPicker
                    addKeyColour={addKeyColour}
                    keyColours={keyColours}
                    removeKeyColour={removeKeyColour}
                    updateKeyColour={updateKeyColour}
                />
                {!!theme && theme.contrastColors && (
                    <ColourTable colours={theme.contrastColors[1].values} />
                )}
            </main>
        </>
    );
}

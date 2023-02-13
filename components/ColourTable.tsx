import React from 'react';
import styles from '../styles/ColourTable.module.css';

interface Colour {
    contrast: number;
    name: string;
    value: string;
}

function ColourRow({ colour }: { colour: Colour }) {
    return (
        <li className={styles.row} style={{ backgroundColor: colour.value }}>
            <span>{colour.name.replace('theme', '')}</span>
            <span>{colour.contrast}:1</span>
            <span className={styles.value}>{colour.value.toUpperCase()}</span>
        </li>
    );
}

export function ColourTable({ colours }: { colours: Colour[] }) {
    return (
        <ul className={styles.table}>
            {colours.map((value: Colour) => (
                <ColourRow key={value.name} colour={value} />
            ))}
        </ul>
    );
}

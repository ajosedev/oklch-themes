import React from 'react';

interface Colour {
    contrast: number;
    name: string;
    value: string;
}

function ColourRow({ colour }: { colour: Colour }) {
    return (
        <li
            className="colour-table__row"
            style={{ backgroundColor: colour.value }}
        >
            <span className="type">
                {colour.name.replace('foreground', '')}
            </span>
            <span className="type">{colour.contrast}:1</span>
            <span className="colour-table__row__value type">
                {colour.value.toUpperCase()}
            </span>
        </li>
    );
}

export function ColourTable({ colours }: { colours: Colour[] }) {
    return (
        <ul className="colour-table">
            {colours.map((value: Colour) => (
                <ColourRow key={value.name} colour={value} />
            ))}
        </ul>
    );
}

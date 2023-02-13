import React from 'react';
import { AiOutlineMinus, AiOutlinePlusSquare } from 'react-icons/ai';
import styles from '../styles/KeyColourPicker.module.css';

interface KeyColourPickerProps {
    addKeyColour: () => void;
    keyColours: string[];
    removeKeyColour: (index: number) => void;
    updateKeyColour: (index: number, value: string) => void;
}

export function KeyColourPicker({
    addKeyColour,
    keyColours,
    removeKeyColour,
    updateKeyColour,
}: KeyColourPickerProps) {
    return (
        <>
            <p>
                Generate a palette by selecting one or more key colours below.
            </p>
            <p>
                Colours are generated in the OKLCH colour space, with
                predetermined lightness stops.
            </p>
            <div className={styles.field}>
                <div className={styles.colours}>
                    {keyColours.map((keyColour, index) => (
                        <div key={index} className={styles.colour}>
                            <label
                                className={styles.label}
                                style={{ backgroundColor: keyColours[index] }}
                            >
                                <input
                                    className={styles.input}
                                    name="keyColour"
                                    onChange={(e) => {
                                        updateKeyColour(index, e.target.value);
                                    }}
                                    value={keyColour}
                                    type="color"
                                />
                            </label>
                            <div
                                className={styles.remove}
                                onClick={() => removeKeyColour(index)}
                            >
                                <AiOutlineMinus size="24px" height="100%" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.add} onClick={addKeyColour}>
                    <AiOutlinePlusSquare size="24px" height="100%" />
                </div>
            </div>
        </>
    );
}

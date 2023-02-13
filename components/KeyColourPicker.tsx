import React from 'react';
import { AiOutlineMinus, AiOutlinePlusSquare } from 'react-icons/ai';

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
        <section>
            <div className="heading type type--bold">Key colors</div>
            <div className="key-colour-picker__field">
                <div className="key-colour-picker__colours">
                    {keyColours.map((keyColour, index) => (
                        <div
                            key={index}
                            className="key-colour-picker__colours__colour"
                        >
                            <label
                                style={{ backgroundColor: keyColours[index] }}
                            >
                                <input
                                    name="keyColour"
                                    onChange={(e) => {
                                        updateKeyColour(index, e.target.value);
                                    }}
                                    value={keyColour}
                                    type="color"
                                />
                            </label>
                            <div
                                className="icon-button"
                                onClick={() => removeKeyColour(index)}
                            >
                                <AiOutlineMinus size="24px" height="100%" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="icon-button" onClick={addKeyColour}>
                    <AiOutlinePlusSquare size="24px" height="100%" />
                </div>
            </div>
        </section>
    );
}

import React from 'react';

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
                                <div className="icon icon--minus" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="icon-button" onClick={addKeyColour}>
                    +
                </div>
            </div>
        </section>
    );
}

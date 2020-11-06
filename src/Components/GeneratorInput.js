import React, { useState } from 'react'
import Data from './Data';


function GeneratorInput() {

    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);

    const handleSubmit = () => {
        // control how many paragraphs we want
        let amount = parseFloat(count);
        if (count > 10) {
            amount = 10;
        }
        setText(Data.slice(0, amount))
    }

    const handleChange = (e) => {
        setCount(e.target.value)

    }

    return (
        <>
            <div className="form" >
                <label>Paragraphs:</label>
                <input
                    type="number"
                    min="0"
                    onChange={handleChange}
                    value={count}
                />
                <button type="submit" onClick={handleSubmit}>generate</button>
                <button onClick={() => setText([])}>clear all</button>
            </div>
            <article>
                {text.map((item, index) => {
                    return (
                        <p key={index}>{item}</p>
                    )
                })}
            </article>

        </>
    )
}

export default GeneratorInput

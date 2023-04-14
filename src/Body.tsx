import { useState, useRef } from 'react'
import './Body.css'

function Body() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        try {
            const parsedJSON = JSON.parse(input);
            setOutput(JSON.stringify(parsedJSON, null, 1));
        } catch(err) {
            console.log(err);
            setOutput('Input Error');
        }
    }

    return (
    <>
    <div className='Body'>
        <h4>Paste data</h4>
        <h4>Beautified output</h4>
        <textarea className='input' value={input} onChange={(e) => setInput(e.target.value)} />
        <textarea className='output' value={output} onChange={(e) => e.preventDefault()} />
    </div>
    <button type="submit" className="button" onClick={handleSubmit}>Parse JSON</button>
    </>
    );
}

export default Body

import React, { useState } from 'react';

export default function Texthtmlform(props) {
    const [text, setText] = useState('enter your text');

    const handleOnChange = (event) =>{
        console.log("HandleOnchange");
        setText(event.target.value);
    }

    const handleUpClick = () =>{
        console.log("Uppercase clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () =>{
        console.log("Lowercase clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () =>{
        console.log("Clear clicked");
        let newText = ' ';
        setText(newText)
    }
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
<div className="mb-3">
    <h1 className='my-3'>{props.heading}</h1>
  <textarea className="htmlform-control" id="examplehtmlformControlTextarea1" rows="10" value={text} onChange={handleOnChange} style={{color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode==='dark' ? 'grey' : 'white'}} ></textarea>
  <br></br>
  <button type="button" className="btn btn-primary my-3" onClick={handleUpClick}>Uppercase</button>
  <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleLowClick}>Lowercase</button>
  <button type="button" className="btn btn-primary my-3" onClick={handleClearClick}>Clear text</button>
</div>
{/**counting words and character */}
<div className='container my-3'>
    <h1>your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} character</p>
    <p>{0.008*text.split(" ").length} minutes to read</p>
</div>
</div>
    </>
  )
}

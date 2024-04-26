import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "Success")
    }
    const handleLoClick = ()=>{
        console.log("Lower was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "Success")
    }
    const handleOnChange = (event)=>{
        console.log("On Change")
        setText(event.target.value)
        // props.showAlert("Converted to UpperCase", "Success")
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text has been cleared", "Success")
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied", "Success")
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
            
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'#3f464c', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Upgrade to uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Upgrade to Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to Preview it Here"}</p>
    </div>
    </>
  )
}

import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function Textform(props) {
    // Declare a new state variable, which we'll call "count"
    const [Text, setText] = useState("");

    const handleupper = () => {
        let NewText = Text.toUpperCase();
        setText(NewText);
    }
    const handlelower = () => {
        let NewText = Text.toLowerCase();
        setText(NewText);
    }
    const handlecapitalizede = () => {
        const arr = Text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].toLowerCase();
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        let NewText = arr.join(" ");
        setText(NewText);
    }
    const handlecopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handlextraspace = () => {
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleUpClear = () => {
        let NewTextclear = ""
        setText(NewTextclear);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div className="container" style={{color: props.mode === "dark"?"white":"black"}}>
            <div className="container mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark"?"#212529":"white",color: props.mode === "dark"?"white":"black"}} id="mybox" rows=""></textarea>
                <div className="my-2">
                    <button type="button" onClick={handleupper} className="btn btn-primary m-2">UPPER CASE</button>
                    <button type="button" onClick={handlelower} className="btn btn-primary m-2">lowercase</button>
                    <button type="button" onClick={handlecapitalizede} className="btn btn-primary m-2">Capitalized</button>
                    <button type="button" onClick={handlecopy} className="btn btn-primary me-2">Copy text</button>
                    <button type="button" onClick={handlextraspace} className="btn btn-primary m-2">Remove Extra spaces</button>
                    <button type="button" onClick={handleUpClear} className="btn btn-danger m-2">clear text</button>

                </div>
            </div>
            <div className="container">
                <h1>Your Text Summary</h1>
                <p>{Text.split(" ").length} word and {Text.length} Characters</p>
                <p>{0.008 * Text.split(" ").length} Minute to Read</p>
                <h2>Preview</h2>
                <p id="mypreview"className="preview border border-1 rounded-2 p-2" style={{backgroundColor: props.mode === "dark"?"#212529":"white"}}>{Text.length>0?Text:" Enter Something in the text box above to preview it here"}</p>
            </div>
        </div>
    )
}
// set proptypes 
Textform.propTypes = {
    heading: PropTypes.string
};
// default props
Textform.defaultProps = {
    heading: 'Enter the text'
};
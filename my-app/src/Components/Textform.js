import React, { useState } from 'react'


export default function
    TextForm(props) {
    const handeUpclick = () => {
        // console.log("Upper case was clicked")
        let newText = text.toUpperCase();
        setText(newText);
    }
    const getVowels = () => {
        const Vowels = "aeiouAEIOU"
        let vowelsCount = 0;
        for (let i = 0; i < text.length; i++) {
            if (Vowels.includes(text[i])) {
                vowelsCount += 1;
            }
        }
        let newText = vowelsCount.toString();
        setText(newText);

    }
    const handeDownclick = () => {
        // console.log("Upper case was clicked")
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }

    const firstchar = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newText)
    }

    const handleReverseClick = () => {
        let newText = text.split("");
        let reverseArray = newText.reverse();
        let joinArray = reverseArray.join("");
        setText(joinArray);
    }

    const countSpecialCharacter = () => {
        const wrd = "!,:;-.?";
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            if (wrd.includes(text[i]))
                count++;
        }
        let newText = count.toString();
        setText(newText);

    }

    const handleAtlClick = () => {
        let newText = text.split("").map((c, i) =>
            i % 2 !== 0 ? c.toLowerCase() : c.toUpperCase()).join("")
        setText(newText);
    }
    const [text, setText] = useState("Enter text here . . . .");

    return (
        <>
            <div className="container">
                <h2>
                    {props.heading}
                </h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="MyBox" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'light' }} rows="8"></textarea> </div>
                <button className="btn btn-primary my-3" onClick={handeUpclick}>Convert To Uppercase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handeDownclick}>Convert To Lowercase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={firstchar}>Convert First Character to Uppercase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleReverseClick}>Reverse the word</button>
                <button className="btn btn-primary my-3 mx-2" onClick={countSpecialCharacter}>Count special character</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleAtlClick}>Convert alternating characters</button>
                <button className="btn btn-primary my-3 mx-2" onClick={getVowels}>Get Vowel</button>

            </div >
            <div className="container">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words , {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the above textbox to preview it here"}</p>
                <p>{text}</p>
                <h2>Time spend</h2>
                <p>{0.08 * text.split(" ").length} minutes</p>
            </div>
        </>
    )
}

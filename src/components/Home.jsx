import React, { useState } from 'react'
import '../App.css';
import Alert from './Alert';

function Home(props) {
    const [text, setText] = useState('')

    const [action, setAction] = useState("")

    const handleOnchange = (event) => {
        console.log("onchange fun ")
        setText(event.target.value);

    }
    const handleUpClick = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
        setAction("UPPERCASE DONE!!")


        if (text !== "") {
            let myalert = document.getElementById('alertmsg');
            myalert.style.display = 'block';
            // $("#myalert").hide(2000)

        }
        else {
            alert("Write something first!!")
        }
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
        setAction("Copied to clipboard")
        if (text !== "") {
            let myalert = document.getElementById('alertmsg');
            myalert.style.display = 'block';
            return false;
        }

        else {
            alert("Write something first!!")
        }

    }
    const handleLowClick = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
        setAction("lowercase done!!")

        if (text !== "") {
            let myalert = document.getElementById('alertmsg');
            myalert.style.display = 'block';
        }
        else {
            alert("Write something first!!")
        }
    }
    const handleRevClick = () => {
        let newtext = text.split("").reverse().join("");
        setText(newtext)
        setAction("Reverse done!!")

        if (text !== "") {
            let myalert = document.getElementById('alertmsg');
            myalert.style.display = 'block';
        }
        else {
            alert("Write something first!!")
        }
    }
    const handleExtraspaceClick = () => {

        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));

        if (text !== "") {
            let myalert = document.getElementById('alertmsg');
            myalert.style.display = 'block';
        }
        else {
            alert("Write something first!!")
        }
    }


    const handleClearClick = () => {
        setText("");
        setAction("Text Cleared!!")
    }
    // const handleReplaceClick = () => {
    //     const myword = document.getElementById("word");
    //     const userword = document.getElementById("newword")

    //     const originalString = text;
    //     const replacedString = originalString.replace(userword, myword);
    //     setText(replacedString);
    //     console.log(replacedString)

    // }


    const textToBinary = () => {
        let binary = '';
        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i).toString(2);
            binary += '0'.repeat(8 - charCode.length) + charCode;
        }
        return binary;

    }
    const textToBinaryval = () => {
        const binarytext = textToBinary(text);
        console.log("binary value is", binarytext)
        setText(binarytext)


    }
    function binaryToString(binary) {
        let str = '';
        for (let i = 0; i < binary.length; i += 8) {
            const byte = binary.substr(i, 8);
            str += String.fromCharCode(parseInt(byte, 2));
        }
        return str;

    }

    const BinToString = () => {
        const myBinary = text
        const myString = binaryToString(myBinary);
        console.log(myString)
        setText(myString)

    }
    function hexToString(hex) {
        let str = '';
        for (let i = 0; i < hex.length; i += 2) {
            const byte = hex.substr(i, 2);
            str += String.fromCharCode(parseInt(byte, 16));
        }
        return str;
    }
    const HexToStringClick = () => {
        const myHex = text;
        const myString = hexToString(myHex);
        console.log(myString)
        setText(myString)
    }


    const textToHext = () => {
        let hex = '';
        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i).toString(16);
            hex += ('0' + charCode).slice(-2); // Add leading zero if necessary
        }
        return hex;
    }
    const textToHexClick = () => {
        const hexclick = textToHext(text);
        console.log("hex value is", hexclick)
        setText(hexclick)
    }


    return (
        <>
            <Alert action={action} id="myalertmsg" />


            <div className="container mt-3 ">
                <p className='font-weight-bold h5'>Enter text or Sentence</p>
                <textarea rows="8" value={text} onChange={handleOnchange} className="form-control" id='mybox' placeholder='Enter Your Text Here...'></textarea>
            </div>

            <div className='buttons container mt-2'>
                <div className="btn btn-primary mx-2" onClick={handleUpClick} >
                    Convert to Uppercase
                </div>

                <div className="btn btn-primary mx-2" onClick={handleLowClick}>
                    Convert to Lowercase
                </div>

                <div className="btn btn-primary mx-2" onClick={handleClearClick}>
                    Clear Text
                </div>
                <div className="btn btn-primary mx-2" onClick={handleCopyClick}>
                    Copy Text
                </div>
                <div className="btn btn-primary mx-2" onClick={handleRevClick}>
                    Reverse Text
                </div>
                <div className="btn btn-primary mx-2" onClick={handleExtraspaceClick}>
                    Remove extra Spaces
                </div>

                <div className="btn btn-primary mx-2" onClick={textToBinaryval}>
                    Text to binary
                </div>
                <div className="btn btn-primary mx-2" onClick={BinToString}>
                    Binary to Text
                </div>
                <div className="btn btn-primary mx-2" onClick={textToHexClick}>
                    Text to Hexadecimal
                </div>
                <div className="btn btn-primary mx-2" onClick={HexToStringClick}>
                    Hexadecimal to Text
                </div>


                <div className="btn btn-danger mx-2" >
                    Total Character Count :{text.length}
                </div>
                <div className="btn btn-danger text-light mx-2" >
                    Total Word Count :{text.split(" ").filter((element) => { return element.length !== 0 }).length}

                </div>
            </div>
            <div className='container preview mt-2'>
                <h5>Preview: </h5>
                <p>{text.length > 0 ? text : "Enter something to preview"}</p>
            </div>

        </>
    )

};

export default Home;
// import React from 'react'
import React,{useState} from 'react'

export default function Textform(props) {

    const handleUpClick=()=>{
        props.showAlert('Convert to Upper Case','Success')
        let set=text.toUpperCase()
    setText(set)
}

const handleOnChange=(event)=>{
    setText(event.target.value)
}

const handleToLo=()=>{
    let low=text.toLowerCase()
    props.showAlert('Convert To Lower Case','Success')
    setText(low)
}

const click=()=>{
    let b ='This is Made By Vikas Sharma'
    setText(b)
}

const mode=()=>{
    
}

const copytext=()=>{
    var a=document.getElementById('copytext')
    let b=a.select()
    navigator.clipboard.writeText(b)
}

const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/)
    props.showAlert('Remove Extra Spaces','Success')
    setText(newText.join(" "))
}


    const[text,setText]=useState('')

   

    return (
        <div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
                
                <label for="exampleFormControlTextarea1" className="form-label">Enter Your Text Here</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange}  style={{backgroundColor:props.mode==='light'?'white':'#001430',color:props.mode==='dark'?'white':'black'}} value={text} rows="9"></textarea>
            </div>
            <div className="container">
            <button className="btn btn-primary mx-1my-3" id='button' onClick={handleUpClick}>ConverToUpperCase</button>
            <button className="btn btn-primary mx-1 my-3" onClick={handleToLo}>ConvertToLowerCase</button>
            <button className="btn btn-primary mx-1 my-3" onClick={click}>Click-Here</button>
            <button className="btn btn-primary mx-1 my-3" onClick={mode}>Enable-Dark-Mode</button>
            <button className="btn btn-primary mx-1 my-3" id='copytext' onClick={copytext}>Copy</button>
            <button className="btn btn-primary mx-1 my-3" id='copytext' onClick={handleExtraSpaces}>RemoveExtraSpaces</button>
            </div>

                 <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h3>Your Summary</h3>
            <p>{text.split(" ").length-'1'} words and {text.length} character</p>
            <p>{0.008*text.split(" ").length} Minutes to Read</p>
            <h1>Preview</h1>
            <p>{text}</p>
        </div>
            
        </div>
    )
}

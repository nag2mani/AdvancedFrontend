import React, { useState } from "react"

function TextUtils() {

    const [text, settext] = useState("")

    const onchangehandler = (event) => {
        settext(event.target.value);
    }

    const onclickuphandler = () => {
        const new_text = text.toUpperCase();
        settext(new_text);
    }

    const onclicklohandler = () => {
        const new_text = text.toLowerCase();
        settext(new_text);
    }

  return (
    <>
      <div className="container my-3">
        <h1>Analyse Your Text Here</h1>
        <textarea className="form-control" value={text} onChange={onchangehandler} ></textarea>
        <button class="btn btn-primary my-2" onClick={onclickuphandler}>Capitalise Your text</button>
        <button class="btn btn-primary my-2 mx-2" onClick={onclicklohandler}>Lowerlise Your text</button>
      </div>

      <div className="container">
        <h1 className="my-3">Your text Stats</h1>
        <p>No. of Words In your text : {text.split(" ").length}</p>
        <p>Length of your text is : {text.length}</p>
        <p>Your Text is : {text}</p>
      </div>
    </>
  )
}

export default TextUtils;

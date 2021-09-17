import React, { useState } from "react";

export default function Textform(props) {
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleTitleCclick = () => {
    if (text !== "") {
      let textTmp = text.trim();
      var words = textTmp.split(" ");
      console.log(words);
      var CapitalizedWords = [];
      words.forEach((element) => {
        CapitalizedWords.push(
          element[0].toUpperCase() + element.slice(1, element.length)
        );
      });
      setText(CapitalizedWords.join(" "));
      props.showAlert("Converted to TitleCase", "success");
    }else{
        alert('Please Enter Text');
    }
  };

  const handleClearclick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };

  const handleReverseclick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Converted to reverse", "success");
  };

  const handleCopy = () => {
    let newtext = text;
    navigator.clipboard.writeText(newtext);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleTitleCclick}>
          Convert to TitleCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleReverseclick}>
          Reverse Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearclick}>
          Clear Text
        </button>
        <div className="container my-3">
          <h2>Your Text Summary</h2>
          <p>
            {text.split(" ").length}words and {text.length}characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter something in the textbox above to preview it here"}
          </p>
        </div>
      </div>
    </>
  );
}

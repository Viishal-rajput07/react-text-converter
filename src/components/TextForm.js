import React, { useState } from "react";
// import "../index.css";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLwClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const clearText = () => {
    setText("");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="w-7/12 m-auto my-5 p-4">
      <h1 className="text-center text-4xl my-2">{props.heading}</h1>
      <div className="flex justify-center items-center">
        <textarea
          className="border border-black p-14 text-2xl"
          name="textarea"
          value={text}
          onChange={handleOnChange}
          id="textf"
          cols="60"
          rows="8"
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue-400 text-white my-5 rounded-md px-3 py-2 m-5"
          onClick={handleUpClick}
        >
          UPPERCAJE
        </button>
        <button
          className="bg-blue-400 text-white my-5 rounded-md px-3 py-2 m-5"
          onClick={handleLwClick}
        >
          LOWERCAJE
        </button>
        <button
          className="bg-blue-400 text-white my-5 rounded-md px-3 py-2 m-5"
          onClick={clearText}
        >
          Reset
        </button>
      </div>
      <p className="font-semibold">Words: {(text.split(" ").length)-1}, Character: {text.length}</p>
      <h3 className="font-semibold">Preview:</h3>
      <p >{text.length>0?text: "Enter something in the above textbox to preview it here"}</p>
    </div>
  );
};

export default TextForm;

import React, { useState } from "react";
// import "../index.css";

const About = (props) => {
//   let myStyle = {
//     color: "white",
//     backgroundColor: "black",
//   };
  const [mystyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setBtnText] = useState("Dark Mode");
  const [text, setText] = useState("");

  const toogleStyle = () => {
    if (mystyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        // border: "1px solid white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        // border: "1px solid black",
      });
      setBtnText("Enable Dark Mode");
    }
  };
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLwClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const clearScreen = () => {
    setText("");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div style={mystyle} className="w-7/12 m-auto my-10 p-4">
      <h1 className="text-center text-4xl my-2">{props.heading}</h1>
      <div className="flex justify-center items-center">
        <textarea
          className="border border-blue-400 p-14 text-2xl rounded-xl"
          name="textarea"
          value={text}
          onChange={handleOnChange}
          id="textf"
          cols="60"
          rows="7"
          style={mystyle}
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
          onClick={toogleStyle}
        >
          {btnText}
        </button>
        <button
          className="bg-blue-400 text-white my-5 rounded-md px-3 py-2 m-5"
          onClick={clearScreen}
        >
          Reset
        </button>
      </div>
      <p className="font-semibold">Words: {(text.split(" ").length)-1}, Character: {text.length}</p>
      <p className="font-semibold">Preview: {text}</p>
    </div>
  );
};

export default About;

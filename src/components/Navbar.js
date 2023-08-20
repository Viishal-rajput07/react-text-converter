import React from "react";
import "../index.css";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav className = {`bg-yellow-500 text-2xl font-bold flex justify-between items-center`} style={{color: props.mode==='white'?'black' : 'white'}}>
        <ul className="h-16 flex items-center space-x-4 ">
          <li></li>
          <li className="px-2  text-green-600">{props.title}</li>
          <li>
            <a className="hover:text-white px-2" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-white px-2 " href="/">
              {props.item2}
            </a>
          </li>
          <li>
            <a className="hover:text-white px-2 " href="/">
              {props.item3}
            </a>
          </li>
        </ul>
        <ul className="mr-10">
        <input type="checkbox" id="flexSwitchCheckDefault" onClick={props.toogleMode}/>
        <label className="text-sm mb-18" htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
        </ul>
      </nav>
    </div>
  );
}
Navbar.propTypes = { title: PropTypes.string, item2: PropTypes.string };
Navbar.defaultProps = {
  title: "set title here",
  item2: "give navbar item",
};

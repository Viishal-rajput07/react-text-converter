import React, { useState } from "react";
import "./index.css";

function Square() {
  const [Value, setValue] = useState(null);

  function handleClick (){
    setValue('x');
  };
  return (
    <button  className="border border-black " onClick={handleClick}>{Value}</button>
  );
}
const Game = () => {
  return (
    <div >
      <div className="flex items-center justify-center h-96">
        <div>
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square /> 
        </div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
        </div>
      </div>
  );
};
export default Game;

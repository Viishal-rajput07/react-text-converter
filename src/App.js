import React, {useState} from "react";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
// import About from "./components/About";


const App = () => {
  const[Mode, setMode] = useState('white');
  const[ModeText, setModeText] = useState('Dark');

  const toggleMode = () => {
    if (Mode === 'black') {
      setMode('white');
      document.body.style.backgroundColor = 'white';
      setModeText('Dark')
    }
    else {
       
        setMode('black');
        document.body.style.backgroundColor = 'grey';
        setModeText('Light')
    }
};
  return (
    <div>
      <Navbar title={"PHARMA Inc."} item2={"about us"} item3={"Address"} mode={Mode} toogleMode = {toggleMode} modeText = {ModeText} />
      <TextForm heading={"Write your opinion"}/>
      {/* <About heading={"Write your opinion"} /> */}
    </div>
  );
};

export default App;

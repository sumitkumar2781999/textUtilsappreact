import './App.css';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Textform from './Textform';
// import Alerts from './Alerts';
// import About from './About';

function App() {
  const [Mode, setMode] = useState("light");
  // const [Alert, setAlert] = useState(null)

  // // show alerts fucntion
  // const showAlerts=(message,type)=>{
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  // }
  const toggleMode=()=>{
    if(Mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "rgb(43, 42, 51)"
      // showAlerts("Dark Mode Has Been Enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white"
      // showAlerts("Light Mode Has Been Enabled","success");
    }    
  }
  
  return (
    <>
    <Navbar titletext="TextUtilsAPP" abouttext="About Us" mode={Mode} toggleMode={toggleMode}/>
    {/* <Alerts alert={Alert}/> */}
    <Textform heading="Enter the text to analyze" mode={Mode}/>
    {/* <About/> */}
    </>
  );
}

export default App;

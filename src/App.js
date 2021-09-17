
import './App.css';
// import About from './components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';

import React, { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
    setalert({
      msg: message, 
      type: type
    })
    setTimeout(() => {
      setalert(null)      
    }, 1500);

  }

const toggleMode =()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor="#042743"
    showAlert("Dark mode has been enabled","success");

  }    
  else{
    setMode('light')
    document.body.style.backgroundColor="white"
    showAlert("Light mode has been enabled","success"); 
  }
}

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-5">
    <Textform showAlert={showAlert} heading= "Enter The Text To Analyze Below"mode={mode}/>
    {/* <About/> */}
    </div>
    </> 
  );
}

export default App;
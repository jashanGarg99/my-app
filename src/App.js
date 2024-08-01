
import { useState } from 'react';
import './App.css';
// import About from './components/About.js';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js';
import Alerts from './components/Alerts.js';

function App() {
 const [mode,setMode] = useState("#107fff");
 const [alert,setAlert] = useState(null);
 const showAlert=(message,type)=>{
  setAlert({
    message :message,
    type :type
  })
  setTimeout(()=>{
    setAlert(null);
  },1200);
 }
 const toggeleMode=()=>{
  if(mode==="#107fff"){
    setMode('black');
    document.body.style.backgroundColor ="#003f89";
    showAlert("Dark mode enabled","success");
  }
  else{
    setMode('#107fff');
    document.body.style.backgroundColor ="white";
    showAlert("Dark mode disabled","success");
  }
 }
//  #107fff or black
  return (
    <>
    <Navbar mode={mode} toggeleMode={toggeleMode}/>
    <div className=""style={{height :'45px'}}><Alerts alert={alert}/></div>
    <div className="container my-3">
    <TextForm title="Text Analyzer By Jashan Garg" mode={mode} showAlert={showAlert}  />
    </div>
    </>
  );
}

export default App;

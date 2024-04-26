// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  // Link,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  // const [text, setText] = useState('Enable Dark Mode');
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "Success")
      // setText('Enable Light Mode')
    }else{
      setMode('dark')
      document.body.style.backgroundColor = '#3f464c'
      showAlert("Dark mode has been enabled", "Success")
      // setText('Enable Dark Mode')

    }
  }
  return (
    <>
<Router>
<Navbar title = "textUtils" mode={mode} toggleMode = {toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
      <Routes>
                <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text below" mode={mode}/>}/>
                <Route path="/about" element={<About/>}/>
      </Routes>
</div>
</Router>

    </>
  );
}

export default App;
// export default Switch;

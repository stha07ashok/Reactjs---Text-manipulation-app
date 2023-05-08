import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Texthtmlform from './components/Textform';
import About from './components/About';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


let name = "sam";
function App() {
  const [mode, setMode] = useState('light')

  const toggleMode =()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      document.title = "Dark Mode";
      setInterval(()=>{
        document.title = "your device is infected with a virus"
      }, 2000);
      setInterval(()=>{
        document.title = "install an antivirus software"
      }, 1500);

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.title = "Light Mode";
    }
  }

  return (
    <> 
    <Router>
      <Navbar mode = {mode} toggleMode = {toggleMode}/>
     <div className='container my-3'>
      <Switch>
        <Route exact path="/">
      <Texthtmlform heading="text area" mode={mode}/>
      </Route>
      <Route exact path="/about">
         <About/>
      </Route>
       
      </Switch>
    </div>
    { /*<Navbar title="practice project" aboutText="about us"/>
    */}
    </Router>
    </>
  );
}

export default App;

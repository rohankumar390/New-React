
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar.js'
import TextForm from './Components/Textform';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App(props) {
  const [mode, setDarkmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggle = () => {
    if (mode === 'light') {
      setDarkmode('dark');
      document.body.style.color = "white"
      showalert("Dark mode has been enabled", "success")
      document.body.style.backgroundColor = 'grey';
      // setInterval(() => {

      //   document.title='TextUtils - Dark Mode enabled'
      // }, 2000);
    }
    else {
      setDarkmode('light');
      showalert("Light mode has been enabled", "success")

      document.body.style.color = "black"
      document.title = 'TextUtils - light Mode enabled'
      document.body.style.backgroundColor = 'white';
    }
  }
  const toggleGreen = () => {
    if (mode === 'light') {
      setDarkmode('dark');
      document.body.style.color = "white"
      showalert("Green mode has been enabled", "success")
      document.body.style.backgroundColor = '#F2AA4CFF';
    }
    else {
      setDarkmode('light');
      showalert("Light mode has been enabled", "success")

      document.body.style.color = "black"

      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>


      <Router>
        <Navbar title='Hello' home='ghar' mode={mode} toggle={toggle} toggleGreen={toggleGreen} />
        <div className="container">
          <Alert alert={alert} />

        


      

          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter the text" />
            </Route>
          </Switch>
        </div>
      </Router>

    </>
  );
}

export default App;

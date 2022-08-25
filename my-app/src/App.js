
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar.js'
import TextForm from './Components/Textform';
function App(props) {
  const [mode, setDarkmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert = (message,type)=>{
    setalert({
              message:message,
              type:type
            })
            setTimeout(() => {
              setalert(null);
            }, 1500);
  }
  const toggle = () => {
    if (mode === 'light') {
      setDarkmode('dark');
      document.body.style.color = "white"
      showalert("Dark mode has been enabled","success")
      document.body.style.backgroundColor='grey';
    }
    else {
      setDarkmode('light');
      showalert("Light mode has been enabled","success")

      document.body.style.color = "black"

      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>


      <Navbar title='Hello' home='ghar' mode={mode} toggle={toggle}/>
      <div className="container">
<Alert alert={alert}/>
        <TextForm heading="Enter the text" />
      </div>



      <About>

      </About>

    </>
  );
}

export default App;

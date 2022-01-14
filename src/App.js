import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react'



// import logo from './logo.svg';
// import './App.css';

function App() {

  //   let style={
  //     color:'white',
  //     backgroundColor:'black'
  // }

  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)
  let showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
  }

  const toggle = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#001430'
      showAlert('Dark Mode is Enable', 'Success')
      document.title = "TextConverter-DarkMode"
    }

    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light Mode is Enable', 'Success')
      document.title = "TextConverter-LightMode"

    }
  }



  return (
    <>
      
        
          <Navbar title="TextConverter" about="AboutUs" mode={mode} toggle={toggle} />
          <Alert alert={alert} />
          <div className="container my-3">
       
        
              <Textform mode={mode} showAlert={showAlert} />
            
          </div>
        
      
    </>
  );
}

export default App;

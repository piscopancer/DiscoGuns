import React from 'react';
import "/WebDev/disco-guns/src/app.css";
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Background from './assets/images/interface/background-0.png'; 
import Main from './components/main/main'; 

function App() {
  return (
    <div className='App'>
      <div className='top'>
        <img className='header-image' src={Background} alt=''/>
        <div className='header-box'>
          <Header/>
          <Intro/>
        </div>
      </div>
      <Main/>
    </div>
  );
}

export default App;

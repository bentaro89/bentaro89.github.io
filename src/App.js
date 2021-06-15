import React, { useState } from 'react';

import NavBar from './components/NavBar'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Hoop from './components/Hoop'

import Basketball from './assets/basketball.svg'
import './App.css';

function App() {
  const [scrolled, setScroll] = useState(false);
  window.onscroll = function () {
    scrollRotate();
    setScroll(true);
  };

function scrollRotate() {
    let image = document.getElementById("basketball-ball");
    image.style.transform = "rotate(" + window.pageYOffset/4 + "deg)";
}
  return (
    <div className='App'>
      <div className='App-header'>
        <NavBar/>
        <div className={scrolled ? '' : 'scroll-down'}/>
        <div className='basketball-container'>
          <img src={Basketball} id='basketball-ball' alt='basketball'/>
        </div>
        
        <Introduction/>
        <Projects/>
        <Hoop
          hoopTop='183em'
          rimTop='202.1em'/>
      </div>
    </div>
  );
}

export default App;

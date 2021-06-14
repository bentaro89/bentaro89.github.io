import React from 'react';

import NavBar from './components/NavBar'
import Introduction from './components/Introduction'
import Projects from './components/Projects'

import Basketball from './assets/basketball.svg'
import './App.css';

function App() {
  window.onscroll = function () {
    scrollRotate();
  };

function scrollRotate() {
    let image = document.getElementById("basketball-ball");
    image.style.transform = "rotate(" + window.pageYOffset/4 + "deg)";
}
  return (
    <div className='App'>
      <div className='App-header'>
        <NavBar/>
        {/* <p>scroll to start</p> */}

        <div className='basketball-container'>
          <img src={Basketball} id='basketball-ball' alt='basketball'/>
          

        </div>
        <Introduction/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;

import React from 'react';

import NavBar from './components/NavBar'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Hoop from './components/Hoop'


import Basketball from './assets/basketball.svg'
// import BasketballHoop from './assets/BasketballHoop.svg'
// import rimPart from './assets/betterHoop.svg'
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
        <div className='basketball-container'>
          <img src={Basketball} id={'basketball-ball'} alt='basketball'/>
          <Introduction/>

        </div>
        <Hoop
        hoopTop='49.3em'
        rimTop='68.4em'/>
        {/* <img src={BasketballHoop} className='basketball-hoop' alt='hoop'/>
        <img src={rimPart} className='basketball-rim' alt='hoop'/> */}
        <Projects/>
        <Hoop
        hoopTop='135em'
        rimTop='150.4em'/>
        <Introduction/>
        
        {/* <h3 id= "footer">hi</h3> */}
      </div>
    </div>
  );
}

export default App;

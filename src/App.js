import React from 'react';

import NavBar from './components/NavBar'
import Introduction from './components/Introduction'

import Basketball from './assets/basketball.svg'
import BasketballHoop from './assets/BasketballHoop.svg'
import rimPart from './assets/betterHoop.svg'
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
       
        <img src={BasketballHoop} className='basketball-hoop' alt='hoop'/>
        {/* <img src={rimPart} className='basketball-rim' alt='hoop'/> */}

        
        {/* <h3 id= "footer">hi</h3> */}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

import logo from './logo.svg';
import NavBar from './components/NavBar'
import Basketball from './assets/basketball.svg'
import BasketballHoop from './assets/basketballHoop.svg'
import './App.css';

function App() {
  const [ball, setNavBar] = useState(false);

  const moveBall = () => {
    if (window.scrollY >= 80)
    {
      setNavBar(true);
    }
    else
    {
      setNavBar(false);
    }
  }

  window.addEventListener('scroll', moveBall);
  return (
    <div className='App'>
      <div className='App-header'>
        <NavBar/>
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
        <div className='basketball-container'>
          <img src={Basketball} className={ball ? 'basketball-ball active' : 'basketball-ball'} alt='basketball'/>
          <img src={BasketballHoop} className='basketball-hoop' alt='hoop'/>
        </div>
        
      </div>
    </div>
  );
}

export default App;

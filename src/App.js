import React, { useState } from 'react';

import NavBar from './components/NavBar'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Footer from './components/Footer'
import PhotoHoop from './components/PhotoHoop'
import Typewriter from 'typewriter-effect';

import Basketball from './assets/basketball.svg'
import './App.css';
import Experience from './components/Experience';

function App() {
  const [scrolled, setScroll] = useState(false);

  window.onscroll = function () {
    scrollRotate();

    // If user scrolls a bit down
    if (window.scrollY >= window.innerHeight/15) {
      setScroll(true);
    }
    else
    {
      setScroll(false);
    }
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
          <img 
            src={Basketball} 
            id='basketball-ball' 
            alt='basketball'
          />
        </div>
        <div className='name-container'>
          {scrolled ?
            null
            :
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Hi! My name is Ben!')
              .start();
              }}
            />
          }
        </div>
        
        <Introduction/>
        <Experience/>
        <Projects/>
        <PhotoHoop
          hoopTop='191em'
          rimTop='210.1em'
        />

        <div className='typewriter-container'>
          <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString('Thank you for your time!')
                .start();
            }}
          />
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

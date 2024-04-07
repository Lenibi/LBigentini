import React, { useState, useEffect } from 'react';
import Background from './components/Background';
import Header from './components/Header';
import './portfolio.css'; // Import portfolio.css

const App = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  const handleMouseMove = event => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (header) {
        const headerY = header.offsetTop;
        setIsHeaderSticky(window.pageYOffset > headerY);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div onMouseMove={handleMouseMove}>
  

      {/* The top part of the header */}
      {/* I used hero class names but it's really part of the header */}
      {/* This section of the header could also count as a hero section */}
      <section className="hero">
        <div className="herocontainer">
          <div className="heroimage">
            <img src="/avatar.png" alt="Logo" />
          </div>
          <div className="herotext">
            <h1>Benjamin Scott</h1>
            <p>Concept Artist</p>
            <p>Contact, Canada</p>
            <p>Contact me:</p>
            <a href="/page"><p>bscott1@outlook.com</p></a> | 613-444-8910
            <a href="/page"><p>linkedin.com/thebenjaminscott</p></a>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className={isHeaderSticky ? 'header sticky' : 'header'} id="header">
        <a href="#Portfolio"><div className="rightline"><p>Portfolio</p></div></a>
        <a href="#About"><div className="rightline"><p>About</p></div></a>
        <a href="#Contact"><div className="rightline"><p>Contact</p></div></a>
        <a href="/page"><div><p>Resume</p></div></a>
      </section>

      
      {/* Images in a grid */}
      <section className="images" id="Portfolio">
        {/* Add your image grid here */}
      </section>

      {/* About me */}
      <section id="About" className="section1">
        {/* Add your about me content here */}
      </section>

      {/* Logos */}
      <section className="logos">
        {/* Add your logos here */}
      </section>

      {/* Education */}
      <section className="section2">
        {/* Add your education content here */}
      </section>

      {/* Contact Form */}
      <section className="contact">
        {/* Add your contact form here */}
      </section>

      {/* Footer */}
      <footer>
        <div className="footersection">
          <div className="footerimage"><img src="/avatar.png" alt="Logo" /></div>
          <div><h1>Benjamin Scott</h1></div>
          <div><p>© Copyright 2023 All Rights Reserved.</p></div>
        </div>
        <div className="header" id="header">
          <a href="#Portfolio"><div className="rightline"><p>Portfolio</p></div></a>
          <a href="#About"><div className="rightline"><p>About</p></div></a>
          <a href="#Contact"><div className="rightline"><p>Contact</p></div></a>
          <a href="/page"><div><p>Resume</p></div></a>
        </div>
      </footer>
      


      
      <Background mouseX={mouseX} mouseY={mouseY} />
      {/* Other components for your portfolio */}


    
    </div>
  );
};

export default App;
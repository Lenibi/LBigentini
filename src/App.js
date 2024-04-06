// src/App.js
import React, { useState } from 'react';
import Background from './components/Background';
import Header from './components/Header';
//import './portfolio.css'; // Import portfolio.css

const App = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = event => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <Header></Header>
      {/* Portfolio Section */}
      <section className="portfolio-section whiteText">
        <h2>My Portfolio</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
        </div>
        {/* Add more projects as needed */}
      </section>
      <Background mouseX={mouseX} mouseY={mouseY} />
      {/* Other components for your portfolio */}

      

    </div>
  );
};

export default App;
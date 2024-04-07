import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const bgName = "bg.png";

const BackgroundContainer = styled.div`
  width: 150vw; /* Adjusted width to cover the entire viewport */
  height: 150vh; /* Adjusted height to cover the entire viewport */
  background-image: url(${process.env.PUBLIC_URL}/${bgName});
  background-size: 150% 150%; /* Zoom effect */
  background-repeat: no-repeat; /* Prevent the background image from repeating */
  background-position: ${props => props.backgroundX}px ${props => props.backgroundY}px; /* Dynamic background position */
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  position: fixed;
  top: -30vh;
  left: -40vw;
  z-index: -1;
  overflow: hidden; /* Hide overflow content from the gradient overlay */

  /*filter: contrast(100%);*/
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /*
    background: 
    linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 25%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.5) 75%, rgba(0, 0, 0, 0.5) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 25%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.5) 75%, rgba(0, 0, 0, 0.5) 100%);
    */
   /*
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(0, 200, 200, 0.1)),
    linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(0, 200, 200, 0.1)),
    linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(0, 200, 200, 0.1));
    */
    
    background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 200, 200, 0))
    ;
    
    
    /* Checkerboard pattern */

    background-size: 100% 100%; /* Adjust size of the squares */
    z-index: 1;
  }
`;

const Trail = styled.div`
  position: fixed;
  top: ${props => props.mouseY - props.trailHeight / 2}px; /* Center the trail vertically */
  left: ${props => props.mouseX - props.trailWidth / 2}px; /* Center the trail horizontally */
  width: ${props => props.trailWidth}px;
  height: ${props => props.trailHeight}px;
  background-image: url(${process.env.PUBLIC_URL}/${bgName});
  background-size: 800% 800%;
  background-position: -${props => (props.mouseX - 100) * 4}px -${props => (props.mouseY - 100) * 4}px; /* Adjusted background position */
  filter: blur(1px); /* Increased blur radius */
  /*mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l3.09 7.423 7.91.577-6.045 4.803 1.455 7.818-7.418-3.59-7.418 3.59 1.455-7.818-6.045-4.803 7.91-.577zm0 0" fill="%23ffffff"/></svg>');*/
  
  mask-image: radial-gradient(square, white 40%, transparent 50%); /* Circular mask shape */
  mask-size: cover;
  pointer-events: none;
  transition: filter 2s ease-in-out; /* Adjusted transition duration */
  transition-delay: 10s; /* Added transition delay */
`;

const Background = ({ mouseX, mouseY }) => {
  const [backgroundX, setBackgroundX] = useState(0); // Initial background X position
  const [backgroundY, setBackgroundY] = useState(0); // Initial background Y position

  useEffect(() => {
    // Calculate background position based on the center of the screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = (mouseX - centerX) * 0.05;
    const offsetY = (mouseY - centerY) * 0.05;
    setBackgroundX(offsetX);
    setBackgroundY(offsetY);
  }, [mouseX, mouseY]);

  //  display: 'flex', justifyContent: 'center', alignItems: 'center', 
  return (
    <div style={{width: '100vw', height: '100vh' }}>
      <BackgroundContainer backgroundX={backgroundX} backgroundY={backgroundY}>
        <Trail mouseX={mouseX} mouseY={mouseY} trailWidth={200} trailHeight={5000} />
        <Trail mouseX={mouseX} mouseY={mouseY} trailWidth={5000} trailHeight={200} />
      </BackgroundContainer>
    
    </div>
  );
};

export default Background;






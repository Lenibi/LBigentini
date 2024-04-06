/*
// src/components/Background.js
import React from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${process.env.PUBLIC_URL}/abstractPINK.png);
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.2s ease;
  transform: translateX(${props => props.x}px) translateY(${props => props.y}px);
`;

const Background = ({ mouseX, mouseY }) => {
  return <BackgroundContainer x={mouseX / 20} y={mouseY / 20} />;
};

export default Background;
*/


/*
// src/components/Background.js
import React from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${process.env.PUBLIC_URL}/abstractPINK.png);
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Trail = styled.div`
  position: fixed;
  top: ${props => props.mouseY - 50}px;
  left: ${props => props.mouseX - 50}px;
  width: 100px;
  height: 100px;
  background-image: url(${process.env.PUBLIC_URL}/abstractPINK.png);
  background-size: 800% 800%;
  background-position: -${props => (props.mouseX - 50) * 8}px -${props => (props.mouseY - 50) * 8}px;
  filter: blur(10px);
  pointer-events: none;
`;

const Background = ({ mouseX, mouseY }) => {
  return (
    <div>
      <BackgroundContainer />
      <Trail mouseX={mouseX} mouseY={mouseY} />
    </div>
  );
};

export default Background;
*/





/*

// src/components/Background.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const moveBackground = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100px 100px;
  }
`;

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${process.env.PUBLIC_URL}/abstractPINK.png);
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  animation: ${moveBackground} 20s linear infinite;
`;

const Trail = styled.div`
  position: fixed;
  top: ${props => props.trailTop}px;
  left: ${props => props.trailLeft}px;
  width: 100px;
  height: 100px;
  background-image: url(${process.env.PUBLIC_URL}/abstractPINK.png);
  background-size: 800% 800%;
  background-position: -${props => props.trailLeft * 8}px -${props => props.trailTop * 8}px;
  filter: blur(10px);
  pointer-events: none;
`;

const Background = ({ mouseX, mouseY }) => {
  const [trailTop, setTrailTop] = useState(mouseY);
  const [trailLeft, setTrailLeft] = useState(mouseX);

  useEffect(() => {
    const updateTrailPosition = () => {
      // Update trail position with a slight delay (e.g., 20 milliseconds)
      setTimeout(() => {
        setTrailTop(mouseY - 50);
        setTrailLeft(mouseX - 50);
      }, 20);
    };

    updateTrailPosition();

    // Cleanup function to clear any pending timeouts
    return () => clearTimeout(updateTrailPosition);
  }, [mouseX, mouseY]);

  return (
    <div>
      <BackgroundContainer />
      <Trail trailTop={trailTop} trailLeft={trailLeft} />
    </div>
  );
};

export default Background;
*/










// // src/components/Background.js
// import React, { useState, useEffect } from 'react';
// import styled, { keyframes } from 'styled-components';

// const moveBackground = keyframes`
//   0% {
//     background-position: -20% 0; /* Start position, moved further left */
//   }
//   50% {
//     background-position: 20% 0; /* Move further to the right */
//   }
//   100% {
//     background-position: -20% 0; /* Return to start position, moved further left */
//   }
// `;

// const zoomBackground = keyframes`
//   0% {
//     background-size: 200% 200%;
//   }
//   100% {
//     background-size: cover; /* Adjusted to cover the entire viewport */
//   }
// `;

// const BackgroundContainer = styled.div`
//   width: 120vw; /* Adjusted width to cover the entire viewport */
//   height: 120vh; /* Adjusted height to cover the entire viewport */
//   background-image: url(${process.env.PUBLIC_URL}/abstractPINK.png);
//   background-size: cover; /* Cover the entire viewport */
//   background-repeat: no-repeat; /* Prevent the background image from repeating */
//   background-position: bottom right; /* Position the background image at the bottom right corner */
//   display: flex;
//   justify-content: center; /* Center horizontally */
//   align-items: center; /* Center vertically */
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: -1;
//   animation: ${moveBackground} 20s linear infinite, ${zoomBackground} 60s linear infinite; /* Adjusted duration for slower animation */
// `;

// const Trail = styled.div`
//   position: fixed;
//   top: ${props => props.trailTop}px;
//   left: ${props => props.trailLeft}px;
//   width: 200px; /* Increased width */
//   height: 200px; /* Increased height */
//   background-image: url(${process.env.PUBLIC_URL}/abstractPINK.png);
//   background-size: 800% 800%;
//   background-position: -${props => props.trailLeft * 4}px -${props => props.trailTop * 4}px; /* Adjusted background position */
//   filter: blur(50px); /* Increased blur radius */
//   mask-image: radial-gradient(circle, white 40%, transparent 50%); /* Circular mask shape */
//   pointer-events: none;
// `;

// const Background = ({ mouseX, mouseY }) => {
//   const centerX = window.innerWidth / 2;
//   const centerY = window.innerHeight / 2;

//   const distanceX = mouseX - centerX;
//   const distanceY = mouseY - centerY;

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
//       <BackgroundContainer style={{ transform: `translate(${distanceX / 50}px, ${distanceY / 50}px)` }}>
//         <Trail trailTop={centerY} trailLeft={centerX} />
//       </BackgroundContainer>
//     </div>
//   );
// };

// export default Background;













// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';

// const BackgroundContainer = styled.div`
//   width: 150vw;
//   height: 150vh;
//   background-image: url(${process.env.PUBLIC_URL}/abstractPINK.png);
//   background-size: 150% 150%;
//   background-repeat: no-repeat;
//   background-position: ${props => props.backgroundX}px ${props => props.backgroundY}px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   position: fixed;
//   top: -30vh;
//   left: -40vw;
//   z-index: -1;
//   overflow: hidden;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(0, 200, 200, 0.1)),
//     linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(0, 200, 200, 0.1)),
//     linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(0, 200, 200, 0.1));
//     background-size: 100% 100%;
//     z-index: 1;
//   }
// `;

// const Trail = styled.div`
//   position: fixed;
//   top: ${props => props.mouseY - props.trailHeight / 2}px;
//   left: ${props => props.mouseX - props.trailWidth / 2}px;
//   width: ${props => props.trailWidth}px;
//   height: ${props => props.trailHeight}px;
//   background-image: url(${process.env.PUBLIC_URL}/abstractPINK.png);
//   background-size: 800% 800%;
//   background-position: -${props => (props.mouseX - 100) * 4}px -${props => (props.mouseY - 100) * 4}px;
//   filter: blur(1px);
//   mask-image: radial-gradient(square, white 40%, transparent 50%);
//   mask-size: cover;
//   pointer-events: none;
//   transition: filter 2s ease-in-out;
//   transition-delay: 10s;
// `;

// const Header = styled.header`
//   width: 100%;
//   padding: 20px 0;
//   background-color: #333; /* Dark background color */
//   color: #fff; /* Light font color */
//   text-align: center;
//   position: fixed;
//   top: 0;
//   z-index: 999;
// `;

// const Logo = styled.div`
//   font-size: 2rem;
//   font-weight: bold;
// `;

// const Navigation = styled.nav`
//   margin-top: 10px;
// `;

// const NavLink = styled.a`
//   color: #fff; /* Light font color */
//   margin: 0 15px;
//   text-decoration: none;
//   font-size: 1.2rem;
// `;

// const Section = styled.section`
//   width: 80%;
//   margin: 50px auto;
//   text-align: center;
//   color: #333; /* Dark font color */
// `;

// const SectionTitle = styled.h2`
//   font-size: 2rem;
//   color: #333; /* Dark font color */
// `;

// const SectionContent = styled.p`
//   font-size: 1.2rem;
//   color: #333; /* Dark font color */
// `;

// const ImageContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   margin-top: 50px;
// `;

// const Image = styled.img`
//   width: 200px;
//   height: auto;
// `;

// const Background = ({ mouseX, mouseY }) => {
//   const [backgroundX, setBackgroundX] = useState(0);
//   const [backgroundY, setBackgroundY] = useState(0);

//   useEffect(() => {
//     const centerX = window.innerWidth / 2;
//     const centerY = window.innerHeight / 2;
//     const offsetX = (mouseX - centerX) * 0.05;
//     const offsetY = (mouseY - centerY) * 0.05;
//     setBackgroundX(offsetX);
//     setBackgroundY(offsetY);
//   }, [mouseX, mouseY]);

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
//       <Header>
//         <Logo>My Portfolio</Logo>
//         <Navigation>
//           <NavLink href="#about">About</NavLink>
//           <NavLink href="#projects">Projects</NavLink>
//           {/* Add more navigation links as needed */}
//         </Navigation>
//       </Header>
      
//       <BackgroundContainer backgroundX={backgroundX} backgroundY={backgroundY}>
//         <Trail mouseX={mouseX} mouseY={mouseY} trailWidth={5} trailHeight={5000} />
//         <Trail mouseX={mouseX} mouseY={mouseY} trailWidth={5000} trailHeight={5} />
//       </BackgroundContainer>
//       <Section id="about">
//           <SectionTitle>About Me</SectionTitle>
//           <SectionContent>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna in elit vestibulum ultricies.
//             Vivamus vel libero eget est dictum fermentum. Integer vitae lectus ultricies, convallis risus vitae,
//             eleifend arcu. Suspendisse potenti. Duis efficitur odio a ultrices malesuada. Sed vel semper metus.
//             Fusce auctor nec magna eget bibendum. Fusce eleifend ex nec orci iaculis sodales.
//           </SectionContent>
//         </Section>
        
//         <Section id="projects">
//           <SectionTitle>Projects</SectionTitle>
//           <SectionContent>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna in elit vestibulum ultricies.
//             Vivamus vel libero eget est dictum fermentum. Integer vitae lectus ultricies, convallis risus vitae,
//             eleifend arcu. Suspendisse potenti. Duis efficitur odio a ultrices malesuada. Sed vel semper metus.
//             Fusce auctor nec magna eget bibendum. Fusce eleifend ex nec orci iaculis sodales.
//           </SectionContent>
//           <ImageContainer>
//             <Image src={process.env.PUBLIC_URL + '/project1.jpg'} alt="Project 1" />
//             <Image src={process.env.PUBLIC_URL + '/project2.jpg'} alt="Project 2" />
//             {/* Add more images for other projects */}
//           </ImageContainer>
//         </Section>
        
//         {/* Add more sections as needed */}
//     </div>
//   );
// };

// export default Background;

















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






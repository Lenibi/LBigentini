import React, { useState, useEffect } from 'react';
import Background from './components/Background';
import Header from './components/Header';
import ImageItem from './components/ImageItem'; 
import ProjectSection from './components/ProjectSection';
import './portfolio.css'; 
import mafuteru1 from './images/screenshots/mafuteru1.png';
import ttt1 from './images/screenshots/TTT1.png';
import pieces1 from './images/screenshots/pieces1.png';
import monopoly1 from './images/screenshots/monopoly1.png';
import amongWeb1 from './images/screenshots/amongWeb1.png';
import multiplayer1 from './images/screenshots/multiplayer1.png';
import wave1 from './images/screenshots/wave1.png';
import cookie1 from './images/screenshots/cookie1.png';
import findmafu1 from './images/screenshots/findmafu1.png';
import ballpit1 from './images/screenshots/ballpit1.png';
import tetris1 from './images/screenshots/tetris1.png';
import pacman1 from './images/screenshots/pacman1.png';
import space1 from './images/screenshots/space1.png';
import asteroids1 from './images/screenshots/asteroids1.png';
import pong1 from './images/screenshots/pong1.png';
import snake1 from './images/screenshots/snake1.png';
import flappy1 from './images/screenshots/flappy1.png';
import madbirds1 from './images/screenshots/madbirds1.png';
import timer2 from './images/screenshots/timer2.png';
import trolltalk1 from './images/screenshots/trolltalk1.png';
import react1 from './images/screenshots/react1.png';
import avatar from './images/screenshots/cube.png'; // https://www.freeimages.com/clipart/vector-rubik-s-cube-5319967

import mafuteru2 from './images/screenshots/mafuteru2.png'; 
import mafuteru3 from './images/screenshots/mafuteru3.png'; 
import mafuteru4 from './images/screenshots/mafuteru4.png'; 
import mafuteru5 from './images/screenshots/mafuteru5.png'; 

import ttt2 from './images/screenshots/ttt2.png';
import ttt3 from './images/screenshots/ttt3.png';
import ttt4 from './images/screenshots/ttt4.png';
import ttt5 from './images/screenshots/ttt5.png';

import pieces2 from './images/screenshots/pieces2.png';
import pieces3 from './images/screenshots/pieces3.png';
import pieces4 from './images/screenshots/pieces4.png';

import monopoly2 from './images/screenshots/monopoly2.png';
import monopoly3 from './images/screenshots/monopoly3.png';
import monopoly4 from './images/screenshots/monopoly4.png';

import multiplayer2 from './images/screenshots/multiplayer2.png';
import wave2 from './images/screenshots/wave2.png';

import cookie2 from './images/screenshots/cookie2.png';
import cookie3 from './images/screenshots/cookie3.png';
import cookie4 from './images/screenshots/cookie4.png';
import cookie5 from './images/screenshots/cookie5.png';

import findmafu2 from './images/screenshots/findmafu2.png';

import ballpit2 from './images/screenshots/ballpit3.png';

import tetris2 from './images/screenshots/tetris2.png';

import pacman2 from './images/screenshots/pacman2.png';

import space2 from './images/screenshots/space3.png';

import asteroids2 from './images/screenshots/asteroids2.png';

import flappy2 from './images/screenshots/flappy2.png';

import snake2 from './images/screenshots/snake2.png';

import pong2 from './images/screenshots/pong2.png';

import madbirds2 from './images/screenshots/madbirds2.png';

import timer3 from './images/screenshots/timer3.png';
import timer4 from './images/screenshots/timer4.png';
import timer5 from './images/screenshots/timer5.png';

import amongWeb2 from './images/screenshots/amongWeb2.png';
import amongWeb3 from './images/screenshots/amongWeb3.png';
import amongWeb4 from './images/screenshots/amongWeb4.png';
import amongWeb5 from './images/screenshots/amongWeb5.png';

import trolltalk2 from './images/screenshots/trolltalk2.png';
import trolltalk3 from './images/screenshots/trolltalk3.png';
import trolltalk4 from './images/screenshots/trolltalk4.png';
import trolltalk5 from './images/screenshots/trolltalk5.png';

import react2 from './images/screenshots/react2.png';
import react3 from './images/screenshots/react3.png';
import react4 from './images/screenshots/react4.png';


import pieces5 from './images/screenshots/pieces5.png';
import pieces6 from './images/screenshots/pieces6.png';
import pieces7 from './images/screenshots/pieces7.png';
import pieces8 from './images/screenshots/pieces8.png';
import pieces9 from './images/screenshots/pieces9.png';
import pieces10 from './images/screenshots/pieces10.png';

import amongWeb6 from './images/screenshots/amongWeb6.png';

import AboutSection from './components/AboutSection';

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
        //const headerY = header.offsetTop;
        const headerY = 130;
        const isSticky = window.pageYOffset > headerY;
        const isAtTop = window.pageYOffset <= headerY;
        setIsHeaderSticky(isSticky && !isAtTop);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div onMouseMove={handleMouseMove}>
      <Background mouseX={mouseX} mouseY={mouseY} />

      {/* The top part of the header */}
      {/* I used hero class names but it's really part of the header */}
      {/* This section of the header could also count as a hero section */}
      <section className="hero">
        <div className="sectionBar">
          
          <div className="herotext">
            <h1>Leonardo Nicolas Bigentini</h1>
            <p><a href="https://www.linkedin.com/in/nbigentini/">LinkedIn</a>, <a href="mailto:leniu2022@gmail.com">leniu2022@gmail.com</a>, 819-271-6166, <a href="https://github.com/Lenibi">GitHub, </a><a href="https://leetcode.com/lenibi1507/">LeetCode</a></p>

          </div>
        </div>
      </section>

      {/* Header */}
      <section className={isHeaderSticky ? 'header sticky' : 'header'} id="header">
        <a href="#GameDevelopment"><div className="rightline"><p>Game Development</p></div></a>
        <a href="#WebDevelopment"><div className="rightline"><p>Web Development</p></div></a>
        <a href="#About"><div className="rightline"><p>About</p></div></a>
        <a href="https://drive.google.com/file/d/1S257EoR5Pze4NxmDJ-F3PEKqSEinI9FY/view?usp=sharing"><div><p>Resume</p></div></a>
      </section>

      <section class="sectionBar">
        
        <div id="GameDevelopment" class="section1text">
          <h2>Unity Game Development</h2>
         
          
        </div>
      </section>

      {/* Images in a grid */}
      <section className="images" id="Portfolio">
  <ImageItem customeRef="Game1" src={pieces1} alt="project" title="The Pieces 3D/2D Story Game" description="Horror story escape game with dialogue and characters. Map is 3D with 2D rooms. Group final project for IMD2006 Game Development." />
  <ImageItem customeRef="Game2" src={mafuteru1} alt="project" title="Save Mafuteru! Flying Game" description="2D Flying side-scroller. Runs on pc and mobile. Mafumafu is taken away in a cage! Play as his mascot mafuteru, collect all the letters to win! Eat toilet paper to restore health and avoid the fireballs."/>
  <ImageItem customeRef="Game3" src={ttt1} alt="project" title="TicTacToe Connect4 Gomoku" description="Among-us themed TicTacToe, Connect4, and Gomoku! 2 Players locally. Runs on pc and mobile." />
  <ImageItem customeRef="Game4" src={monopoly1} alt="project" title="Multiplayer Monopoly" description="-WIP- Multiplayer network lobby system using Unity NetCode for GameObjects, Lobby and Relay. Game will be a 3D Monopoly game." />
  <ImageItem customeRef="Game5" src={multiplayer1} alt="project" title="Multiplayer Avatar Test" description="Testing multiplayer Unity NetCode for GameObjects, Lobby and Relay. Connect your avatar through console commands. Connection works in WebGL!" />

  <ImageItem customeRef="Game6" src={wave1} alt="project" title="Geometry Dash Wave Clone" description="Simple quick Wave clone from the game Geometry Dash. Runs on pc and mobile." />
  <ImageItem customeRef="Game7" src={cookie1} alt="project" title="Dunk the Cookie!" description="Simple TinyGame assignment for IMD2006 Game Development class. Drop the cookie in the milk to aquire points!" />
  <ImageItem customeRef="Game8" src={findmafu1} alt="project" title="Find Mafumafu" description="Simple randomly positioned pictures, find the different one and click it! Click on Show to show where the different one is." />
  <ImageItem customeRef="Game9" src={ballpit1} alt="project" title="Ballpit" description="Simple ball pit. Move your cursor around and mouseclick to push the balls away from you." />
  <ImageItem customeRef="Game10" src={tetris1} alt="project" title="Tetris" description="Tetris clone tutorial. Added features such as display next piece and different scores." />

  <ImageItem customeRef="Game11" src={pacman1} alt="project" title="Pac-Man" description="Pac-man clone tutorial. Added features such as UI and restart." />
  <ImageItem customeRef="Game12" src={space1} alt="project" title="Space Invaders" description="Space Invaders clone tutorial. Added features like a win screen." />
  <ImageItem customeRef="Game13" src={asteroids1} alt="project" title="Asteroids" description="Asteroids tutorial. Added features such as UI, highscore and increasing difficulty (more spawn over time and faster)." />
  <ImageItem customeRef="Game14" src={flappy1} alt="project" title="Flappy Bird" description="Flappy Bird clone tutorial. Uploaded to WebGL for mobile play." />
  <ImageItem customeRef="Game15" src={snake1} alt="project" title="Snake" description="Snake clone tutorial. Added features such as longest length and UI." />

  <ImageItem customeRef="Game16" src={pong1} alt="project" title="Pong" description="Pong clone tutorial. Play against PC Ai paddle. Added features such as increasing speed over and paddle movement." />
  <ImageItem customeRef="Game17" src={madbirds1} alt="project" title="Mad Birds" description="Angry Birds clone tutorial. The first Unity tutorial I followed that got me into Unity!" />
  
</section>

<section id="WebDevelopment" class="sectionBar">
        
        <div class="section1text">
          <h2>Web Development</h2>
         
          
        </div>
      </section>

      <section className="images2" id="Portfolio">
      <ImageItem customeRef="Web1" src={timer2} alt="project" title="CubeTimer App - HTML CSS JavaScript" description="IMD1005 Web Develepment class assignment03. A Rubik's cube timer to keep track of your times and solves! Hold space bar and let go to start the timer. Space again to stop. Calculates averages, best times, edit or delete times feature." />
      <ImageItem customeRef="Web2" src={amongWeb1} alt="project" title="Imposter Dash - HTML CSS JavaScript" description="IMD1005 Web Development class final group assignment. I was in charge of main game functionality and mechanics. 2D running side-scroller. Jump over the obstacles. Bounce death animation and jumps made using math functions. Sin function " />
      <ImageItem customeRef="Web3" src={trolltalk1} alt="project" title="TrollTalk TypeRacer with Multiplayer Chat - Python/Django and Web Sockets" description="-WIP- IMD2900 Final group project. Trolls3-themed mulitplayer typeracer game with multiplayer chat. I was in charge of main back-end functionality including typing game and lobby chat functionality." />
      <ImageItem customeRef="Web4" src={react1} alt="project" title="React Mini Projects - ReactJS TypeScript" description="7 small projects including GitHub User Search using API, Shopping/To-Do List, Image Carousel, FAQ/Accordion, Quote Generator using API,  Video Player, BMI Calculator." />
      
</section>

<section class="sectionBar" >
        
        <div class="section1text">
          <h2> </h2>
         
          
        </div>
      </section>
      <section id="About" class="about">
        <div class="section1picture">
          <img src={avatar} alt="Logo"></img>
        </div>
        <div class="section1text">
          <h2>About Me</h2>
          <p>
          Hey, I'm Nicolas Bigentini. I am a 2nd-year student at Carleton University and Algonquin College, 
          studying Interactive Multimedia and Design in the Bachelors of Information Technology. 
          My passion is programming, specifically game development which is my focus in this degree. 
          I love problem solving and algorithms, which I practice by completing LeetCode problems. 
          The field of virtual and augmented reality is very exciting to me! I believe VR/AR is the future.
          </p><p>
          Currently Lab/Grading TA for a first year programming class. I am under the development of a 
          Monopoly Multiplayer game in Unity as a personal project.
          </p>

          <a href="https://www.linkedin.com/in/nbigentini/"><button>LinkedIn</button></a>
          <a href="mailto:leniu2022@gmail.com"><button>leniu2022@gmail.com</button></a>
          <a href="https://github.com/Lenibi"><button>GitHub</button></a>
        </div>
      </section>

      <section id="Showcase" className="sectionBar">
        
        <div class="section1text">
          <h2>Projects Showcase</h2>
         
          
        </div>
      </section>


<section id="Game1" className="projectSection1">
      <ProjectSection
        image1={pieces5}
        image2={pieces9}
        image3={pieces10}
        image4={pieces8}
        video={"https://www.youtube.com/embed/G19RyZ82w4Y"}
        title="The Pieces 3D/2D Story Game"
        description="Horror story escape game with dialogue and characters. Map is 3D with top-down 2D rooms. Group final project for IMD2006 Game Development. Developed 3D areas and most of the game functionality including a reusable dialogue system and managing game throughout different scenes using static instances. 
        There is code for dialogue voice sounds but deadline stopped us from implementing. May continue working on this game to fix bugs and improve it."
        howToPlay="You play as Ash. Follow the objective.
WASD + Mouse to move
E to interact
Space to pickup boxes in 2D
MouseClick for dialogue
M to open Menu
"
        githubLink="https://github.com/Lenibi/ThePieces"
        playLink="https://akhilknowsdawae.itch.io/the-pieces"
        warning=""
      />
</section>


<div id="Space" className="space"></div>
<section id="Game2" className="projectSection1">
      <ProjectSection
        image1={mafuteru2}
        image2={mafuteru3}
        image3={mafuteru4}
        image4={mafuteru5}
        video={"https://www.youtube.com/embed/HJl8d4lF8Bg"}
        title="Mafuteru Flying Game"
        description="A game about my favourite japanese singer Mafumafu and his mascot Mafuteru. Mafumafu is taken away in a cage, and Mafuteru flies to save him!
Made in Unity, includes UI, start animation, flying physics, rope physics, Unity's Particle system, animation, sound and more.
I am aware that the game is too difficult for the average user because the flying is too sensitive and fast. This is an easy fix I just change the force value, but did not want to go through the exporting process again."
        howToPlay="Hold down the mouse left click to fly
Health decreases when touching the ground, ceiling, or hitting a fireball
Eat tissues to refill health
Collect all the letters that Mafumafu throws to win, spelling out the name of the song!"
        githubLink="https://github.com/Lenibi/Mafuteru-Flying-Game"
        playLink="https://lenibi.github.io/Mafuteru-Flying-Game/"
        warning="Works horizontally on mobile! Loading screen is gray, allow some loading time!"
      />
</section>
    

<div id="Space" className="space"></div>

      
<section id="Game3" className="projectSection1">
      <ProjectSection
        image1={ttt2}
        image2={ttt3}
        image3={ttt4}
        image4={ttt5}
        video={"https://www.youtube.com/embed/Eaa4wGusrlQ"}
        title="TicTacToe-Connect4-Gomoku"
        description="My first Unity project on my own after following a lot of tutorials. Simple game to try out UI, sounds, animations, game logic, and general Unity knowledge. Exported to WebGL for easier playability."
        howToPlay="Choose player 1 and 2 characters, select game mode.
Tic Tac Toe: Get 3 in a row to win.
Connect 4: Get 4 in a row to win.
Gomoku: Get 5 in a row to win."
        githubLink="https://github.com/Lenibi/TicTacToe-Connect4-Gomoku"
        playLink="https://lenibi.github.io/TicTacToe-Connect4-Gomoku/"
        warning="Works horizontally on mobile! Loading screen is gray, allow some loading time!"
      />
</section>



















<div id="Space" className="space"></div>

      <section id="Game4" className="projectSection1">
      <ProjectSection
        image1={monopoly1}
        image2={monopoly2}
        image3={monopoly3}
        image4={monopoly4}
        video={"https://www.youtube.com/embed/PxxgLgCwdS8"}
        title="Multiplayer Monopoly with Lobby System (NOT DONE!)"
        description="-WIP- Multiplayer network lobby system using Unity NetCode for GameObjects, Lobby and Relay. Game will be a 3D Monopoly game."
        howToPlay="Make 2 builds of the same game, choose a username and authenticate.
Create a lobby or join a lobby through lobby list or join by code.
Only host can kick other joined players and start the game.
"
        githubLink=""
        playLink=""
        warning="GAME IS NOT DEPLOYED YET! Links do not work."
      />
</section>


<div id="Space" className="space"></div>

      <section id="Game5" className="projectSection1">
      <ProjectSection
      has2images={true}
        image1={multiplayer1}
        image2={multiplayer2}
        image3={monopoly3}
        image4={monopoly4}
        video={"https://www.youtube.com/embed/dT634UHYVQU"}
        title="Multiplayer Avatar Test"
        description="Learning Unity multiplayer using Netcode for GameObjects, Relay, and Lobby. Testing if this also works when exporting to WebGL. Planning to make an online Monopoly multiplayer game."
        howToPlay="The buttons are not used anymore, use the command line terminal
Open up two instances of the game (2 tabs), works on multiple computers online (not LAN)
Tab1: Type CreateRelay
Tab2: Type JoinRelay codeYouGotInTab1
The two players are now linked together! Use WASD and spacebar to move around
Can also use the lobby commands, such as CreateLobby, JoinLobbyByCode (code), or PrintPlayers, etc.
"
        githubLink="https://github.com/Lenibi/Test-WebGL-Multiplayer-1"
        playLink="https://lenibi.github.io/Test-WebGL-Multiplayer-1/"
        warning="Loading screen is gray, allow some loading time! This is only a demo not a full project."
      />
</section>


<div id="Space" className="space"></div>

      <section id="Game6" className="projectSection1">
      <ProjectSection
      has2images={true}
        image1={wave1}
        image2={wave2}
        image3={monopoly3}
        image4={monopoly4}
        video={"https://www.youtube.com/embed/HYcZ0n0r1eY"}
        title="Geometry Dash Wave"
        description="A simple clone of the wave gamemode from Geometry Dash made in Unity. Quickly made this for fun in a couple hours. The trail effect was challenging. It is made by instantiating a rhombus (or square rotated 45 degrees) at the player position over and over. Death particle effect, spinning saws, music, replay."
        howToPlay="Hold down the mouse left click to go up, do nothing to go down
Hit the ground, ceiling or saws and you lose
"
        githubLink="https://github.com/Lenibi/Geometry-Dash-Wave-Final"
        playLink="https://lenibi.github.io/Geometry-Dash-Wave-Final/"
        warning="Works horizontally on mobile! Loading screen is gray, allow some loading time!"
      />
</section>



<div id="Space" className="space"></div>

      <section id="Game7" className="projectSection1">
      <ProjectSection
        image1={cookie2}
        image2={cookie3}
        image3={cookie4}
        image4={cookie5}
        video={"https://www.youtube.com/embed/BY1qmQAexmk"}
        title="Tiny-Game---Dunk-The-Cookie"
        description="Simple cookie game for a small assignment. Dunk the cookie in the milk glass to get points."
        howToPlay="Left mouse click or space bar to drop the cookie.
Health decreases over time.
Land the cookie in the fire, or run out of health and you lose.
Land the cookie in the milk to replenish health and increase score.
Hand/Cookie moves faster over time to increase difficulty.
"
        githubLink="https://github.com/Lenibi/Tiny-Game---Dunk-The-Cookie"
        playLink="https://lenibi.github.io/Tiny-Game---Dunk-The-Cookie/"
        warning="Works horizontally on mobile! Loading screen is gray, allow some loading time!"
      />
</section>


<div id="Space" className="space"></div>

      <section id="Game8" className="projectSection1">
      <ProjectSection
      has2images={true}
        image1={findmafu1}
        image2={findmafu2}
        image3={monopoly3}
        image4={monopoly4}
        video={"https://www.youtube.com/embed/PEU-PnMvLik"}
        title="Find The Odd One Out Mafumafu"
        description="Simple small game I made for fun. Find the odd one out! Random each time."
        howToPlay="Click on the different image
If you cannot find it press on Show to reveal
"
        githubLink="https://github.com/Lenibi/Find-The-Odd-One-Out-Mafu-"
        playLink="https://lenibi.github.io/Find-The-Odd-One-Out-Mafu-/"
        warning="Works on mobile! Loading screen is gray, allow some loading time!"
      />
</section>


<div id="Space" className="space"></div>

      <section id="Game9" className="projectSection1">
      <ProjectSection
      has2images={true}
        image1={ballpit1}
        image2={ballpit2}
        image3={monopoly3}
        image4={monopoly4}
        video={"https://www.youtube.com/embed/dM5xSfs04j4"}
        title="Ball Pit Mafumafu"
        description="Cool simple idea I had for fun. Video background. Move around in the ball pit and push the balls around!"
        howToPlay="Move the mouse cursor around and interact with balls
Mouse click for ball explosion.
"
        githubLink="https://github.com/Lenibi/Ball-Pit-Mafu-"
        playLink="https://lenibi.github.io/Ball-Pit-Mafu-/"
        warning="Works horizontally on mobile! Loading screen is gray, allow some loading time!"
      />
</section>


<div id="Space" className="space"></div>

      <section id="Game10" className="projectSection1">
      <ProjectSection
      has2images={true}
        image1={tetris1}
        image2={tetris2}
        image3={monopoly3}
        image4={monopoly4}
        video={"https://www.youtube.com/embed/fspCgwTBdCY"}
        title="Tetris"
        description="Tetris clone tutorial, followed to get learn and get better at Unity. Added features such as display next piece, increasing speed and UI."
        howToPlay="Drop the shapes and fill up rows to get points. Run out of space and you lose!
WASD or Arrow Keys
Space is hard drop
S / down is soft drop
Rotate Left: Q, W, Up Arrow
Rotate Right: E
Recommended: Space and arrow keys
"
        githubLink="https://github.com/Lenibi/Tetris-Tutorial"
        playLink="https://lenibi.github.io/Tetris-Tutorial/"
        warning="Loading screen is gray, allow some loading time!"
      />
</section>


<div id="Space" className="space"></div>

      <section id="Game11" className="projectSection1">
      <ProjectSection
      has2images={true}
        image1={pacman1}
        image2={pacman2}
        image3={monopoly3}
        image4={monopoly4}
        video={"https://www.youtube.com/embed/f3gH7uslzTc"}
        title="Pac-Man"
        description="Pac-man clone tutorial, followed to learn and get better at Unity. Added features such as UI, 3 lives and restart. Ghosts have basic Ai movement"
        howToPlay="Capture all the pellets while avoiding the ghosts. Big pellets turn the ghosts slow, blue and edible.
WASD or Arrow Keys to move
"
        githubLink="https://github.com/Lenibi/Pacman-Tutorial"
        playLink="https://lenibi.github.io/Pacman-Tutorial/"
        warning="Loading screen is gray, allow some loading time!"
      />
</section>



<div id="Space" className="space"></div>

      <section id="Game12" className="projectSection1">
      <ProjectSection
      has2images={true}
        image1={space1}
        image2={space2}
        image3={monopoly3}
        image4={monopoly4}
        video={"https://www.youtube.com/embed/tux3toKRwi4"}
        title="Space Invaders"
        description="Space Invaders clone tutorial. Added features like a win screen and increasing speed. Followed to learn and get better at Unity."
        howToPlay="Kill all the enemies before they reach you! Walls cover you from enemy fire. Enemies destroy walls when they reach them.
A/S or Left/Right arrows to move
Space/MouseClick to shoot
"
        githubLink="https://github.com/Lenibi/Space-Invaders-Tutorial"
        playLink="https://lenibi.github.io/Space-Invaders-Tutorial/"
        warning="Loading screen is gray, allow some loading time!"
      />
</section>




<div id="Space" className="space"></div>

      <section id="Game13" className="projectSection1">
      <ProjectSection
      has2images={true}
        image1={asteroids1}
        image2={asteroids2}
        image3={monopoly3}
        image4={monopoly4}
        video={"https://www.youtube.com/embed/bl0MRRqAIsg"}
        title="Asteroids"
        description="Asteroids tutorial. Added features such as UI, highscore and increasing difficulty (more spawn over time and faster). Followed to learn and get better at Unity."
        howToPlay="Shoot down the asteroids to get points. Big asteroids split. Get hit and you lose a life. There is invulnerability so you don't die again instantly.
WASD / Arrows to move
Space/MouseClick to shoot
"
        githubLink="https://github.com/Lenibi/Asteroids-Tutorial-Final"
        playLink="https://lenibi.github.io/Asteroids-Tutorial-Final/"
        warning="Loading screen is gray, allow some loading time!"
      />
</section>

<div id="Space" className="space"></div>

      <section id="Game14" className="projectSection1">
      <ProjectSection
      has2images={true}
        image1={flappy1}
        image2={flappy2}
        image3={monopoly3}
        image4={monopoly4}
        video={"https://www.youtube.com/embed/ni1-RvMp7E8"}
        title="Flappy Bird"
        description="Flappy Bird clone tutorial. Uploaded to WebGL for mobile play. Followed to learn and get better at Unity."
        howToPlay="Avoid the ground, ceiling and tubes. Pass through tubes to increase score!
MouseClick/Space to flap. Tap on mobile
"
        githubLink="https://github.com/Lenibi/Flappy-Bird-Tutoral-Final"
        playLink="https://lenibi.github.io/Flappy-Bird-Tutoral-Final/"
        warning="Works on mobile! Loading screen is gray, allow some loading time!"
      />
</section>


<div id="Space" className="space"></div>

      <section id="Game15" className="projectSection1">
      <ProjectSection
      has2images={true}
        image1={snake1}
        image2={snake2}
        image3={monopoly3}
        image4={monopoly4}
        video={"https://www.youtube.com/embed/6o2vjE7K4GQ"}
        title="Snake"
        description="Snake clone tutorial. Added features such as longest length, made movement faster and added UI. Followed to learn and get better at Unity."
        howToPlay="Avoid the walls and your own tail, collect the red apples to increase score!
WASD/Arrows to move
"
        githubLink="https://github.com/Lenibi/Snake-Tutorial"
        playLink="https://lenibi.github.io/Snake-Tutorial/"
        warning="Loading screen is gray, allow some loading time!"
      />
</section>



<div id="Space" className="space"></div>

      <section id="Game16" className="projectSection1">
      <ProjectSection
      has2images={true}
        image1={pong1}
        image2={pong2}
        image3={monopoly3}
        image4={monopoly4}
        video={"https://www.youtube.com/embed/WqjYyTc18EE"}
        title="Pong"
        description="Pong clone tutorial. Play against PC Ai paddle. Paddle movement has drag to increase difficulty. Added features such as increasing speed over and paddle movement. Followed to learn and get better at Unity."
        howToPlay="Don't let the ball touch your side! Use the paddle to make it bounce to the other side. Beat the Ai, it eventually loses! (very difficult)
W/S or Up/Down arrows to move
"
        githubLink="https://github.com/Lenibi/Pong-Tutorial-Final"
        playLink="https://lenibi.github.io/Pong-Tutorial-Final/"
        warning="Loading screen is gray, allow some loading time!"
      />
</section>


<div id="Space" className="space"></div>

      <section id="Game17" className="projectSection1">
      <ProjectSection
      has2images={true}
        image1={madbirds1}
        image2={madbirds2}
        image3={monopoly3}
        image4={monopoly4}
        video={"https://www.youtube.com/embed/ad5F6g2yu3I"}
        title="Mad Birds"
        description="Angry Birds clone tutorial. The first Unity tutorial I followed that got me into Unity! Followed to learn and get better at Unity."
        howToPlay="Drag the bird with your mouse, use the arrow to aim, and let go to shoot. Knock down the boxes and hit the blue enemies!
Mouse click and drag to shoot
"
        githubLink="https://github.com/Lenibi/Mad-Birds-Tutorial"
        playLink="https://lenibi.github.io/Mad-Birds-Tutorial/"
        warning="Loading screen is gray, allow some loading time!"
      />
</section>


<div id="Space" className="space"></div>
<section id="Web1" className="projectSection1">
      <ProjectSection
        image1={timer2}
        image2={timer3}
        image3={timer4}
        image4={timer5}
        video={"https://www.youtube.com/embed/sl2Qj3OaePA"}
        title="Cube Timer App - HTML CSS JavaScript"
        description="A timer app that keeps track of times and automatically calculates your averages. Features such as clear function, next or previous scramble, saving your scrambles, and editing times with +2 or DNF (did not finish). Made for speedcubers (solving Rubik's Cubes fast) to help them with their solves. Scrambles are just randomly generated, does not follow proper WCA scramble standards. This is an old project. Code is very messy and long as I was not as experienced. There are bugs in the average and best times calculations, but works most of the time."
        howToPlay="Hold the space bar, then release to start the time once the font is green. There is a hold delay for accidental spacebar presses in red font.
Once the timer is running, tap the space to stop the timer.
View your averages on the left side. The table becomes scrollable once you run out of space on the screen.
Click on the individual times for editing options.
+2 adds 2 seconds to the time. DNF or Did Not Finish sets it as an invalid solve and counts it as 0."
        githubLink="https://github.com/Lenibi/Cube-Timer-App"
        playLink="https://lenibi.github.io/Cube-Timer-App/"
        warning="Site design is responsive. Some features are buggy."
        use="true"
      />
</section>


<div id="Space" className="space"></div>
<section id="Web2" className="projectSection1">
      <ProjectSection
        image1={amongWeb6}
        image2={amongWeb3}
        image3={amongWeb1}
        image4={amongWeb5}
        video={"https://www.youtube.com/embed/8AXuWQaEb0Y"}
        title="Imposter Dash - HTML CSS JavaScript"
        description="IMD1005 Web Develepment class final group assignment. I was in charge of main game functionality and mechanics. 2D running side-scroller. Jump over the obstacles. Game physics made in vanilla javascript with no libraries. 
Bounce death animation and jumps made using math functions. |sin(x)/x| creates a perfect shape for a bounce!(shown on first picture) Had some fun in the menu with math functions and made a ? button that creates interesting shapes with the red character as an easter egg."
        howToPlay="Choose your colour. Jump, fast-fall and crouch to avoid obstacles. The longer you are alive the higher your score!
Space/W/Up to jump
S/Down to fast fall(in air) and crouch(on ground)"
        githubLink="https://github.com/imd1005-web-development-winter-2023/group-project-dobytes"
        playLink="https://imd1005-web-development-winter-2023.github.io/group-project-dobytes/"
        warning=""
        use="true"
      />
</section>

<div id="Space" className="space"></div>
<section id="Web3" className="projectSection1">
      <ProjectSection
        image1={trolltalk2}
        image2={trolltalk3}
        image3={trolltalk4}
        image4={trolltalk5}
        video={"https://www.youtube.com/embed/GmtCMqtC9po"}
        title="TrollTalk TypeRacer with Multiplayer Chat - Python/Django, Channels/Web Sockets, Jira and Github"
        description="(NOT DONE!) IMD2900 Final group project. Trolls 3 Band Together themed mulitplayer typeracer game with multiplayer chat. I was in charge of main back-end functionality including typing game and lobby chat functionality. Uses Django Channels to make network connection work.
This class was not about programming but rather about project management. Focused on Scrums in Jira and 2-week sprints. Actively participated in all of our sprint meetings, like sprint planning, standups, review, and retrospective.
Project is not done because our assignment was this way, we were meant to assume that we had one more sprint to do. However, I plan on continuing and finishing this project over the summer."
        howToPlay="Create an account and login. Choose a troll.
Text other online players in the main lobby.
Create a lobby room or join one through lobby list or join code.
Once connected, chat with other players in that room.
Start game and race against other players in a type race!
A random script line from the movie Trolls 3 is generated, type it correctly to win. 
Green text is correct, red text is incorrect.
        "
        githubLink="https://github.com/garnkai/trolltalk"
        playLink=""
        warning="Not deployed yet, play button does not work!"
        use="true"
        hasLink="true"
      />
</section>





<div id="Space" className="space"></div>
<section id="Web4" className="projectSection1">
      <ProjectSection
        image1={react1}
        image2={react2}
        image3={react3}
        image4={react4}
        video={"https://www.youtube.com/embed/89fqfDj6Q7o"}
        title="React Mini Projects - ReactJS TypeScript"
        description="7 small projects including GitHub User Search using API and Shopping/To-Do List. Made this to learn and get better at React. Learned things like fetchAPI, Props, basic hooks like useEffect, useState and useMemo."
        howToPlay="Project 1 Carousel: Press the arrows to scroll through
Project 2 Faq/Accordion: Press the +/- button to show/hide
Project 3 Quote Generator: Press the button to generate a random quote
Project 4 Shopping List: Use textbox and button to add new Item to list. Doubleclick to strikethrough. X to delete from list.
Project 5 GitHub User Search: Use search box to search user profiles
Project 6 Video Player: Use radio buttons to change videos
Project 7 BMI Calculator: Drag the sliders to calculate bmi
        "
        githubLink="https://github.com/Lenibi/React-Mini-Projects"
        playLink="https://lenibi.github.io/React-Mini-Projects/"
        warning=""
        use="true"
      />
</section>













      {/* Logos */}
      <section className="logos">

      </section>

      {/* Education */}
      <section className="section2">
 
      </section>

      {/* Contact Form */}
      <section className="contact">
 
      </section>

      {/* Footer */}
      <footer>
      <section className="header">
        <a href="#GameDevelopment"><div className="rightline"><p>Game Development</p></div></a>
        <a href="#WebDevelopment"><div className="rightline"><p>Web Development</p></div></a>
        <a href="#About"><div className="rightline"><p>About</p></div></a>
        <a href="https://drive.google.com/file/d/1S257EoR5Pze4NxmDJ-F3PEKqSEinI9FY/view?usp=sharing"><div><p>Resume</p></div></a>
      </section>
      </footer>
      


      
      
    </div>
  );
};

export default App;
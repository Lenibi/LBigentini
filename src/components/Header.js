import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 py-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="left">
          <h1 className="text-white">Nicolas Bigentini</h1>
        </div>
        <div className="right flex">
          <a href="#about" className="circle-button bg-blue-500">About</a>
          <a href="#experience" className="circle-button bg-blue-500">Experience</a>
          <a href="#projects" className="circle-button bg-blue-500">Projects</a>
          <a href="#resume" className="circle-button bg-blue-500">Resume</a>
          <a href="#contact" className="circle-button bg-blue-500">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
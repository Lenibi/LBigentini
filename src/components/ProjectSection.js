import React from 'react';
import './ProjectSection.css'; 

const ProjectSection = ({ image1, image2, image3, image4, video, title, hasLink, use, description, howToPlay, warning, githubLink, playLink, has2images }) => {
  const renderDescription = () => {
    return description.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  const renderHowToPlay = () => {
    return howToPlay.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <section className="project-section">
      <div className="project-images">
        <img src={image1} alt="Project Image 1" />
        <img src={image2} alt="Project Image 2" />
        {has2images ? null : (
          <>
            <img src={image3} alt="Project Image 3" />
            <img src={image4} alt="Project Image 4" />
          </>
        )}
      </div>
      <div className="project-details">
        <h2>{title}</h2>
        <p>{renderDescription()}</p>
        {use ? <h3>How to Use</h3> : (
  <>
    <h3>How to Play</h3>
  </>
)}
        
        <p>{renderHowToPlay()}</p>
        <b><p>{warning}</p></b>
        <div className="project-buttons">
          <a href={playLink} target="_blank" rel="noopener noreferrer"><button>Play</button></a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer"><button>GitHub</button></a>
        </div>
      </div>
      <div className="project-video">
        <h3>Demo</h3>
        <iframe
          src={video}
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
          className="mx-auto"
          width="400"
        />
        {!hasLink ? null : (
          <>
          <h3>
            <a href="https://docs.google.com/presentation/d/1mJJiRr2fb4DFkZCPMZHSLykwYcS_KCFH41yaqGjA9Pw/edit?usp=sharing">Project Slides Presentation</a>
            </h3>
          </>
        )}
      </div>

      
      
      <br></br>
    </section>
  );
};

export default ProjectSection;

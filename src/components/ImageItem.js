import React, { useState } from 'react';
import './ImageItem.css'; 

const ImageItem = ({ src, alt, customeRef, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    //<a href={`#${customeRef.toLowerCase().replace(/\s/g, '-')}`} className="image-item-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
    <a href={`#${customeRef.replace(/\s/g, '-')}`} className="image-item-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      
      <h2 className="image-title">{title}</h2>

      
      <img className={`art ${isHovered ? 'darken' : ''}`} src={src} alt={alt} />

     
      <p className={`image-description ${isHovered ? 'visible' : 'hidden'}`}>{description}</p>
    </a>
  );
};

export default ImageItem;

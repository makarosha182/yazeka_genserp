import React from 'react';

// Placeholder images (replace with real assets as needed)
import img1 from './image.png';
import img2 from './image.png';
import img3 from './image.png';

const cardStyle = {
  background: '#fff',
  borderRadius: 20,
  height: 240,
  width: 240,
  minWidth: 240,
  minHeight: 240,
  overflow: 'hidden',
  position: 'relative',
  display: 'inline-block',
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
  flexShrink: 0,
};

const imgStyle = {
  width: 240,
  height: 240,
  minWidth: 240,
  minHeight: 240,
  objectFit: 'contain', // Show whole image, may have empty space
  display: 'block',
  borderRadius: 20,
  flexShrink: 0,
};

const ImageGallery = () => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: 4, height: 240, width: '100%', overflowX: 'auto', overflowY: 'hidden', alignItems: 'flex-start' }}>
    <div style={cardStyle}>
      <img src={img1} alt="Gallery 1" style={imgStyle} />
    </div>
    <div style={cardStyle}>
      <img src={img2} alt="Gallery 2" style={imgStyle} />
    </div>
    <div style={cardStyle}>
      <img src={img3} alt="Gallery 3" style={imgStyle} />
    </div>
  </div>
);

export default ImageGallery; 
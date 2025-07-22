import React from 'react';
import image from './image.png';

const OneImage = () => (
  <img
    src={image}
    alt="OneImage"
    style={{ width: 'fit-content', height: 240, objectFit: 'cover', display: 'block', borderRadius: 20 }}
  />
);

export default OneImage; 
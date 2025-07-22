import React from 'react';
import YazekaHeader from '../../base/atoms/YazekaHeader';
import OneImage from '../atom/OneImage';
import ImageGallery from '../atom/ImageGallery';

const YazekaImageBlock = ({ showImage = true, text = '' }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
    <YazekaHeader />
    {text}
    {showImage && (
      <>
        <OneImage />
        <ImageGallery />
      </>
    )}
  </div>
);

export default YazekaImageBlock; 
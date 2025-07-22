import React from 'react';
import YazekaHeader from '../../base/atoms/YazekaHeader';
import OneImage from '../atom/OneImage';
import ImageGallery from '../atom/ImageGallery';

const YazekaImageBlock = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
    <YazekaHeader />
    <OneImage />
    <ImageGallery />
  </div>
);

export default YazekaImageBlock; 
import React from "react";
import Button from 'react-bootstrap/Button';

const ArrowLeftSVG = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_19033_55672)">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.005 1.005L13.9949 1.99495L5.98991 9.99998L13.9949 18.005L13.005 18.995L4.01001 9.99998L13.005 1.005Z" fill="black"/>
    </g>
    <defs>
      <clipPath id="clip0_19033_55672">
        <rect width="20" height="20" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const BackButton = (props) => (
  <Button
    variant="light"
    className="rounded-pill shadow d-flex align-items-center justify-content-center p-0"
    style={{
      width: 56,
      height: 56,
      backdropFilter: 'blur(5px)',
      background: 'rgba(255,255,255,0.8)',
      border: '0.5px solid #aaaaaa',
      boxShadow: '0px 4px 64px 0px rgba(0,0,0,0.1)'
    }}
    {...props}
  >
    {ArrowLeftSVG}
  </Button>
);

export default BackButton; 
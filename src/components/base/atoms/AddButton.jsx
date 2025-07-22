import React from "react";
import Button from 'react-bootstrap/Button';

const ArrowPlusSVG = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_11771_35086)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.3 10.7V19H10.7V10.7H19V9.3H10.7V1H9.3V9.3H1V10.7H9.3Z" fill="black"/>
    </g>
    <defs>
    <clipPath id="clip0_11771_35086">
    <rect width="20" height="20" fill="white"/>
    </clipPath>
    </defs>
  </svg>
);

const AddButton = (props) => (
  <Button
    variant="light"
    className="rounded-pill d-flex align-items-center justify-content-center p-0"
    style={{
      width: 48,
      height: 48,
      background: 'rgba(0,0,0,0.05)',
    }}
    {...props}
  >
    {ArrowPlusSVG}
  </Button>
);

export default AddButton; 
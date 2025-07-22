import React from "react";
import Button from 'react-bootstrap/Button';
import userPic from './image.png';

const UserPic = (props) => (
  <Button
    variant="light"
    className="rounded-pill d-flex align-items-center justify-content-center p-0"
    style={{
      width: 48,
      height: 48,
      background: 'rgba(0,0,0,0.05)',
      overflow: 'hidden',
      padding: 0,
    }}
    {...props}
  >
    <img
      src={userPic}
      alt="User"
      style={{
        width: 48,
        height: 48,
        objectFit: 'cover',
        borderRadius: '50%',
        display: 'block',
      }}
    />
  </Button>
);

export default UserPic; 
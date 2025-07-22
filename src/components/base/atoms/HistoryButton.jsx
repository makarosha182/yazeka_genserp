import React from "react";
import Button from 'react-bootstrap/Button';
import historyBtn from './history-btn.png';

const HistoryButton = (props) => (
  <Button
    variant="light"
    className="rounded-pill shadow d-flex align-items-center justify-content-center p-0"
    style={{
      width: 56,
      height: 56,
      border: '0.5px solid #aaaaaa',
      boxShadow: '0px 4px 64px 0px rgba(0,0,0,0.1)',
      background: `url(${historyBtn}) center/cover no-repeat, rgba(255,255,255,0.8)`
    }}
    {...props}
  />
);

export default HistoryButton; 
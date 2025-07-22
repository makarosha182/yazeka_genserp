import React from 'react';

/**
 * MessageBubble component
 * - Max width: 270px
 * - Word-wrapped text
 * - Figma-accurate styles (rounded corners, background, padding, font)
 * - Accepts 'text' prop
 */
const MessageBubble = ({ text }) => {
  return (
    <div
      style={{
        background: '#f8604a',
        borderRadius: '20px 0px 20px 20px',
        maxWidth: 270,
        // minWidth: 100,
        color: '#fff',
        fontFamily: 'YS Text, sans-serif',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.4,
        padding: '9.5px 14px 11px 14px',
        boxSizing: 'border-box',
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
        display: 'inline-block',
      }}
    >
      {text}
    </div>
  );
};

export default MessageBubble; 
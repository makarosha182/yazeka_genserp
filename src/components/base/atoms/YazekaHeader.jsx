import React from 'react';

const YazekaHeader = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8, width: '100%' }}>
      <div style={{
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: '#f8604a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* SVG for the Y icon, matching Figma */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="16" fill="#F8604A"/>
            <path d="M17.7531 26H14.2711V20.2734L7.70996 6H11.3359L16.4582 17.1655C17.4366 19.295 17.7531 20.0432 17.7531 22.6043V26ZM20.0265 15.6691H16.4869L20.7459 6H24.2855L20.0265 15.6691Z" fill="white"/>
        </svg>

      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0 }}>
        <div style={{
          fontFamily: 'YS Text, sans-serif',
          fontWeight: 500,
          fontSize: 12,
          lineHeight: 1.4,
          color: 'rgba(0,0,0,0.9)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          Yazeka
        </div>
        <div style={{
          fontFamily: 'YS Text, sans-serif',
          fontWeight: 400,
          fontSize: 12,
          lineHeight: 1.4,
          color: 'rgba(0,0,0,0.4)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          Based on 37 sources
        </div>
      </div>
    </div>
  );
};

export default YazekaHeader; 
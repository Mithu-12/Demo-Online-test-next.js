import React from 'react';


export default function Button({onClick, text, style, customStyle, disabled}) {
    style = {
        // backgroundColor: backgroundColor ? backgroundColor : '#4c8ccc',
        backgroundColor: '#4c8ccc',
        padding: '10px 20px',
        margin: '0px 8px',
        textDecoration: 'none',
        border: 'none',
        borderRadius: '6px',
        color: '#fff',
        cursor: 'pointer',
        ...customStyle,
      };
 
  return <button style={style} onClick={onClick} disabled={disabled}>{text}</button>;
}

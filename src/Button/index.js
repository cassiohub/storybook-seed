import React from 'react';

const Button = ({ color, children }) => (
  <button style={{ backgroundColor: color }}>
    { children}
  </button>
);

export default Button;
import React from 'react';
import './Button.css';

const Button = ({ varient = 'primary', children, ...rest }) => {
  return (
    <button className={`button ${varient}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;

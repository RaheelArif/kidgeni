// BlackButton.js
import React from 'react';
import { Button } from 'antd';
import { PiArrowRight } from 'react-icons/pi';
import styles from './ui.module.scss';

const BlackButton = ({ 
  text = "Sign up", 
  icon = <PiArrowRight />, 
  size = "large", 
  shape = "round", 
  onClick, 
  className = "", 
  variant = "default", // Add variant prop for different styles
}) => {
  return (
    <Button
      shape={shape}
      size={size}
      className={`
        ${styles.customSignInButton} 
        ${styles[`button-${variant}`]} 
        ${className}
      `}
      onClick={onClick}
    >
      {text}
      <div className={styles.customArrow}>
        {icon}
      </div>
    </Button>
  );
};

export default BlackButton;
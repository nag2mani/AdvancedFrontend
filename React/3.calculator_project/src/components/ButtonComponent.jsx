import React from 'react';

const ButtonComponent = ({ label, handleClick }) => {
  return (
    <button onClick={() => handleClick(label)}>
      {label}
    </button>
  );
};

export default ButtonComponent;


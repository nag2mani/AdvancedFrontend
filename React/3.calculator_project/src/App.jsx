import React, { useState } from 'react';
import ButtonComponent from './components/ButtonComponent';
import ScreenComponent from './components/ScreenComponent';
import './index.css';

const App = () => {
  const [input, setInput] = useState(''); // To handle user input
  const [result, setResult] = useState(''); // To handle the result

  const handleClick = (label) => {
    if (label === '=') {
      try {
        // Only evaluate if there's valid input
        if (input.trim() !== '') {
          const calculatedResult = eval(input); // Evaluate the input
          setResult(calculatedResult);
        } else {
          setResult('Error');
        }
      } catch (error) {
        setResult('Error');
      }
    } else if (label === 'C') {
      setInput(''); // Clear the input
      setResult(null);
    } else {
      setInput((prev) => prev + label); // Concatenate the input
    }
  };

  return (
    <div className="calculator">
      <ScreenComponent value={input || result || '0'} />
      <div className="buttons">
        {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '+', '-', '*', '/', '=', 'C'].map((btn) => (
          <ButtonComponent key={btn} label={btn} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default App;

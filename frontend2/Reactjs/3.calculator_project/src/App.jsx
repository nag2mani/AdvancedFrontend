// src/App.jsx
import { useState } from 'react';
import ButtonComponent from './components/ButtonComponent';
import ScreenComponent from './components/ScreenComponent';
import './index.css';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        setResult(eval(input));
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setResult('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/'];

  return (
    <div className="app">
      <ScreenComponent value={result || input || "0"} />
      <div className="button-grid">
        {buttons.map((btn, index) => (
          <ButtonComponent key={index} label={btn} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default App;

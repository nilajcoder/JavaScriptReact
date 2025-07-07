import React, { useState } from 'react'

const Calculator = () => {

    const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    '+', '7', '8', '9',
    '-', '4', '5', '6',
    '*', '1', '2', '3',
    '/', '0', '.', '=',
    'C'
  ];
  return (

     <div className="calculator-container">
      <div className="display">{input || '0'}</div>
      <div className="buttons">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            className={`btn ${isNaN(btn) && btn !== '.' ? 'operator' : ''}`}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};
   
   


export default Calculator

import React, { useState } from 'react'


const calculate = (expression) => {
  try {
    // Match numbers and operators (e.g., ['12', '+', '5', '*', '2'])
    const tokens = expression.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);

    if (!tokens || isNaN(tokens[0])) return 'Error';

    let result = parseFloat(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const next = parseFloat(tokens[i + 1]);

      if (isNaN(next)) return 'Error';

      switch (operator) {
        case '+':
          result += next;
          break;
        case '-':
          result -= next;
          break;
        case '*':
          result *= next;
          break;
        case '/':
          if (next === 0) return 'Error';
          result /= next;
          break;
        default:
          return 'Error';
      }
    }

    return result.toString();
  } catch {
    return 'Error';
  }
};
const Calculator = () => {

    const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      setInput(calculate(input));
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

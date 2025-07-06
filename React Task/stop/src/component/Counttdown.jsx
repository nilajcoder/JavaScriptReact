import React, { useEffect, useRef, useState } from 'react'

const Counttdown = () => {


   const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [limit, setLimit] = useState('');
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prev => {
          const newTime = prev + 1;
          if (limit && newTime >= Number(limit)) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
          }
          return newTime;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, limit]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLimit('');
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60).toString().padStart(2, '0');
    const sec = (seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  };
  return (
     <div className="stopwatch-container">
      <h1>React Stopwatch</h1>
      <h2 style={{ color: 'dodgerblue' }}>{formatTime(time)}</h2>
      <div className="buttons">
        <button className="start" onClick={handleStart}>Start</button>
        <button className="stop" onClick={handleStop}>Stop</button>
        <button className="reset" onClick={handleReset}>Reset</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <label style={{ color: 'black', marginRight: '10px' }}>Set Time Limit (seconds):</label>
        <input
          type="number"
          placeholder="Optional"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Counttdown

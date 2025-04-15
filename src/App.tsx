import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = (): void => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = (): void => {
    setCount(prevCount => prevCount - 1);
  };

  const resetCount = (): void => {
    setCount(0);
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Click Counter</h1>
      
      <div style={{ 
        fontSize: '6rem', 
        fontWeight: 'bold', 
        color: count > 0 ? 'green' : count < 0 ? 'red' : '#333',
        margin: '20px 0' 
      }}>
        {count}
      </div>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <button 
          onClick={decrementCount} 
          style={{ 
            padding: '10px 20px', 
            fontSize: '1.2rem', 
            backgroundColor: '#ff6b6b', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}
        >
          -
        </button>
        
        <button 
          onClick={resetCount} 
          style={{ 
            padding: '10px 20px', 
            fontSize: '1.2rem', 
            backgroundColor: '#aaa', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}
        >
          Reset
        </button>
        
        <button 
          onClick={incrementCount} 
          style={{ 
            padding: '10px 20px', 
            fontSize: '1.2rem', 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
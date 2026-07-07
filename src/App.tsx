import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('Mlew');

  function decrementCount() {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  }

  function incrementCount() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }

  function changeTheme() {
    if (theme == 'Mlew') {
      setTheme('Red');
    } else {
      setTheme('Mlew');
    }
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
      <button onClick={changeTheme}>Change Theme</button>
    </>
  );
}

export default App;

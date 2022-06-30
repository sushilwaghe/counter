
import './App.css';
import {useState} from 'react';

function App() {

  const [count, setCount]= useState(0);

  function increase(){
    setCount(count+1);
  }
  function decrease(){
    setCount(count-1);
  }
  return (
    <div className="container">
      <div className='counter-app'>
        <button onClick={increase} className='counter-btn'>Increase</button>
        <h2 id="counter" className='counter-heading'>{count}</h2>
        <button onClick={decrease} className='counter-btn'>Decrease</button>
      </div>
    </div>
  );
}

export default App;

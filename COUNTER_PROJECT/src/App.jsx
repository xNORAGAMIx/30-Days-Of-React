import { useState } from 'react';
import './App.css'
function App() {

  let [count,setCount] = useState(1);

  const addValue = () =>{
    if( count < 20){
      setCount(count + 1);
    }

    // * Sending a callback function of prev value of counter
    //setCount(prev => prev+1);
  }

  const removeValue = () =>{
    if (count > 0){
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={addValue}>ADD</button>
      <button onClick={removeValue}>REMOVE</button>
    </>
  )
}

export default App

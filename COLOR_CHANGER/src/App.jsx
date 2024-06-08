import { useState } from 'react';
import './App.css';

function App(){

  const [color,setColor] = useState('white');

  return (
    <>
    <h1 className='heading'>Color Changer</h1>
    <div className='butts'>
      <button style={{backgroundColor: 'red', color: 'white'}} onClick={() => setColor('red')}>Red</button>
      <button style={{backgroundColor: 'blue', color: 'white'}} onClick={() => setColor('blue')}>Blue</button>
      <button style={{backgroundColor: 'green', color: 'white'}} onClick={() => setColor('green')}>Green</button>
    </div>
    <div className="box" style={{backgroundColor: color}}>

    </div>
    </>
  )
}

export default App
import './App.css';
import { useState, useCallback, useEffect, useRef } from 'react';

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAlllowed, setCharacterAllowed] = useState(false);
  const [password,setPassword] = useState("");


  const passwordRef = useRef(null)

  const passGen = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed){
      str = str + "0123456789";
    }
    if(characterAlllowed){
      str = str + "@#$&{}?.,_";
    }

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length,numberAllowed,characterAlllowed,setPassword])

  const copyPass = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,6);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passGen()
  }, [length,numberAllowed,characterAlllowed,passGen])

  return (
    <>
      <h1>Password Generator</h1>
      <div className="box">
        <div className="outerBox">
          <div className='innerBox'>
            <input 
              className='inputBox' 
              type="text" 
              value={password}
              placeholder='Password'
              readOnly
              ref={passwordRef}
              />
            <button onClick={copyPass}>Copy</button>
          </div>
          <div className='innerBox'>
            <div className="choices">
              <div className="items">
                <input 
                  type="range" 
                  name="" 
                  id=""
                  min={6}
                  max={100}
                  style={{verticalAlign: 'top', marginTop: '5px', cursor: 'pointer'}}
                  onChange={(e) => setLength(e.target.value)}/>
              </div>
              <div className="items">
                <p>Length({length})</p>
              </div>
              <div className="items">
                <input 
                  type="checkbox" 
                  name="Numbers" 
                  id="" 
                  defaultChecked={numberAllowed}
                  onChange={() => {
                    setNumberAllowed((prev) => !prev)
                  }}/>
                <label htmlFor="">Number</label>
              </div>

              <div className="items">
                <input 
                  type="checkbox" 
                  name="Characters" 
                  id="" 
                  defaultChecked={characterAlllowed}
                  onChange={() => {
                    setCharacterAllowed((prev) => !prev)
                  }}/>
                <label htmlFor="">Character</label>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

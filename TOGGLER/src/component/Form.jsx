import { useToggle } from "../context/ToggleContext"


function Form() {

    const {toggleTheme} = useToggle();

  return (
    <div className='container'>
        <h3>Sign Up</h3>
      <form className="form">
        <input 
            type="text"
            required
            placeholder="Username" />

        <input 
            type="password"
            required
            placeholder="Password" />
        
        <button>Submit</button>
      </form>
      <button className="mode-changer" onClick={toggleTheme}>Toggle</button>
    </div>
    
  )
}

export default Form

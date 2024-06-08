import Form from './component/Form'
import { useToggle } from './context/ToggleContext'

function App() {

  const {theme} = useToggle();

  return (
    <div className='body' id={theme}>
      <Form />
    </div>
    
  )
}

export default App

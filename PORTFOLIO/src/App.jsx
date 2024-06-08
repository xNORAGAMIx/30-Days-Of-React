import Hero from './component/Hero/Hero'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  

  return (
    <ThemeProvider>
      <Hero/>
    </ThemeProvider>
  )
}

export default App

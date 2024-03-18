import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Footer } from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Navbar />
        <div className="content">
          <Home />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App

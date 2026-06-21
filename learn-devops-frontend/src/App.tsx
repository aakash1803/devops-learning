import { useState } from 'react'
import './App.css'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {

const [message, setMessage] = useState('loading...')

fetch(`http://localhost:8080/api/v1/hello`)
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage("Error fetching from backend"));

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <p>Response from the API:http://localhost:8080/api/v1/hello {message}</p>
      </section>

      <div className="ticks"></div>

    </>
  )
}

export default App

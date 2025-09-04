import './App.css'
import React from 'react'
import Navbar from './Navigation/Navbar'
import Header from './Header/Header'
import About from './About/About'
import Services from './Services/Services'
import Projects from './Projects/Projects'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Projects />
      <br />
    </>
  )
}

export default App
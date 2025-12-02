import './App.css'
import React, { useState, useEffect} from 'react'
import Navbar from './Navigation/Navbar'
import About from './About/About'
import Services from './Services/Services'
import Projects from './Projects/Projects'
import Photography from './Photography/Photography'
import Loading from './Loading/Loading'
import Banner from './Banner/Banner'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const App = () => {
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => setIsLoading(false), 3000)
  //   return () => clearTimeout(timer)
  // }, [])

  // if (isLoading) {
  //   return <Loading />
  // }

  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Projects />
      {/* <Photography /> */}
      <Contact />
      <Footer />
      {/* <br /> */}
    </>
  )
}

export default App
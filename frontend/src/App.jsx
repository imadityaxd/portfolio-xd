import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import ProjectCarousel from './components/Projects'
import AboutMe from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'
import './App.css'


function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <ProjectCarousel/>
    <Services/>
    <Skills/>
    <AboutMe/>
    <Contact/>
    <Footer/>
      <h1 className="text-red-500">aditya</h1>
    </>
  )
}

export default App

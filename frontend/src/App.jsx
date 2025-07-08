import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import ProjectSection from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'
import './App.css'


function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <ProjectSection/>
    <Services/>
    <Skills/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App

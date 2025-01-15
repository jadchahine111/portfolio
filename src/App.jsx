import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import { BrowserRouter } from "react-router-dom";
import CTA from './components/CTA'
import MobileUI from './components/MobileUI'

function App() {
  return (
      <main className="min-h-screen">
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
        <Hero />
        <About />
        <Experience />
        <MobileUI />
        <Projects />
        <Pricing />
        <Contact />
        <CTA />
      </main>
  )
}

export default App


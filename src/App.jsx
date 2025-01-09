import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Pricing />
        <Contact />
      </main>
  )
}

export default App


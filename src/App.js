import React from 'react'
import { Navbar, Home, SolialLinks, About, Portfolio, Experience, Contact } from "./components/inject"

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <SolialLinks />
      {/* <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SolialLinks /> */}
    </div>
  )
}

export default App
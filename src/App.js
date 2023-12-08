import React from 'react'
import { Navbar, Home, SolialLinks, About } from "./components/inject"
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <SolialLinks />
      <About />
    </div>
  )
}

export default App
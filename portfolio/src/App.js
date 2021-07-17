import React, { useState } from 'react' 
import coverHeaderImage from "./assets/cover/cover-header-image.jpg"
// import About from './components/About'
import Nav from './components/pages/Nav'
import PortfolioContainer from './components/PortfolioContainer'

import './App.css';

function App() {
  return (
    <div>
      <img src={coverHeaderImage} className="my-2" style={{ width: "100%", height: "150px" }} alt="cover"/>
      <main>
        <PortfolioContainer />
      </main>
    </div>
  )
}

export default App;

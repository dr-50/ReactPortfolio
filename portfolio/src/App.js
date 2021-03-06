import React from 'react' 
import coverHeaderImage from "./assets/cover/cover-header-image.jpg"
import PortfolioContainer from './components/PortfolioContainer'
import GitHubLogo from "./assets/images/GitHub-Mark-32px.png"

import './App.css';

function App() {
  return (
    <div>
      <img src={coverHeaderImage} className="my-2" style={{ width: "100%", height: "150px" }} alt="cover"/>
      <main>
        <PortfolioContainer />
      </main>
      <footer>
            <a href="https://github.com/dr-50"> <img src={GitHubLogo} alt=""/> </a>
      </footer>
    </div>
  )
}

export default App;

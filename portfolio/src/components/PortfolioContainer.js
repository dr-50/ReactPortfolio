import React, { useState } from 'react';
import Nav from "./pages/Nav";
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


function PortfolioPage() {

    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'Contact':
                return <Contact />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    }

    return (
        <div>
            {
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            }
            <div>{renderPage(currentPage)}</div>
        </div>    
    )
}

export default PortfolioPage;
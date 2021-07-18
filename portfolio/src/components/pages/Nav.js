import React from 'react'

function Nav(props) {
    const tabs =['About', 'Portfolio', 'Contact', 'Resume']
    return (
        <header>
            <h2>
                <a href="https://dr-50.github.io/ReactPortfolio/">
                <span>Devon Ross</span>
                </a>
            </h2>
            <nav>
                <ul className="nav nav-tabs">
                    {tabs.map(tab => (
                        <li className="nav=item" key={tab}>
                            <a href={'#' + tab.toLowerCase()}
                            onClick={()=> props.handlePageChange(tab)}
                            className={props.currentPage === tab ? 'nav-link active' : 'nav-link'}
                        >{tab}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;

import React from 'react'

function Nav() {

    return (
        <header>
            <h2>
                <a href="/">
                <span>Devon Ross</span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    <li className="mx-2">
                        <a href="#resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;
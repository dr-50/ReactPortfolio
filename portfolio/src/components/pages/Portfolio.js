import React from 'react'
import craftReviewImg from "../../assets/images/review-crafts.jpg"
import songsAndSpirts from "../../assets/images/songs-and-spirts.jpg"
import weatherImg from "../../assets/images/weather.jpg"
import runBuddyImg from "../../assets/images/run-buddy.png"
import workCalendarImg from "../../assets/images/work-calendar.jpg"
//import techblogImg from "../../assets/images/techblog.jpg"
import bustedbracketsImg from "../../assets/images/busted-brackets.JPG"
import GitHubLogo from "../../assets/images/GitHub-Mark-32px.png"
import WebLinkLogo from "../../assets/images/website-icon-29492-Windows.ico"


function Portfolio(){
    return (
    <div className="portfolio-cards">
    <div className="portfolio-card one">
        <div className="portfolio-links">
        <img src={craftReviewImg} className="project-image" alt=""/>
        <a href="https://github.com/mspierings96/Craft-Reviews"> <img src={GitHubLogo} alt=""/> </a>
        <a href="https://review-crafts.herokuapp.com/"> <img src={WebLinkLogo} width="32px" alt=""/> </a>
        </div>
        <div className="portfolio-description">
            <h2>Craft-Reviews</h2>
            <p>Find your next favorite craft beer brewery!</p>
        </div>
    </div>
    < div className="portfolio-card two">
    <div className="portfolio-description">
            <h2>Songs and Spirits</h2>
            <p>Come for the drinks stay for the fun!</p>
        </div>
        <div className="portfolio-links">
        <img src={songsAndSpirts} className="project-image" alt=""/>
        <a href="https://github.com/adamlsn/songsAndSpirits"><img src={GitHubLogo} alt=""/></a>
        <a href="https://adamlsn.github.io/songsAndSpirits/"> <img src={WebLinkLogo} width="32px" alt=""/> </a>
        </div>
    </div>
    <div className="portfolio-card three">
    <div className="portfolio-links">
        <img src={weatherImg} className="project-image" alt="" />
        <a href="https://github.com/dr-50/WeatherDashboard"><img src={GitHubLogo} alt=""/> </a>
        <a href="https://dr-50.github.io/WeatherDashboard/"><img src={WebLinkLogo} width="32px" alt=""/> </a>
       </div>
        <div className="portfolio-description">
            <h2>Weather Dashboard</h2>
            <p>Let your grandpa take control of watching the weather. Get your weather updates like a champ, from anywhere.</p>
        </div>
    </div>

    <div className="portfolio-card four">
    <div className="portfolio-description">
            <h2>Run Buddy</h2>
            <p>For when running alone gets too boring. Reachout and get one of our trainers to pump your run game up.</p>
        </div>
        <div className="portfolio-links">
        <img src={runBuddyImg} className="project-image" alt="" />
        <a href="https://github.com/dr-50/RunBuddy"><img src={GitHubLogo} alt=""/> </a>
        <a href="https://dr-50.github.io/RunBuddy/"><img src={WebLinkLogo} width="32px" alt=""/> </a>
        </div>
    </div>

    <div className="portfolio-card five">
        <div className="portfolio-links">
        <img src={workCalendarImg} className="project-image" alt="" />
        <a href="https://github.com/dr-50/WorkCalendar"><img src={GitHubLogo} alt=""/> </a>
        <a href="https://dr-50.github.io/WorkCalendar/"><img src={WebLinkLogo} width="32px" alt="" /> </a>
        </div>
        <div className="portfolio-description">
            <h2>Work Week Schedule</h2>
            <p>Don't let the Monday moods get you down. Schedule your week and conquer your work!</p>
        </div>
    </div>

    <div className="portfolio-card six">
    <div className="portfolio-description">
            <h2>Busted Bracket</h2>
            <p>Challenge your friends in a tournament style competition!</p>
        </div>
        <div class="portfolio-links">
        <img src={bustedbracketsImg} className="project-image" alt="" />
        <a href="https://github.com/adamlsn/busted-brackets"><img src={GitHubLogo} alt=""/> </a>
        <a href="https://limitless-wildwood-05739.herokuapp.com/"><img src={WebLinkLogo} width="32px" alt=""/> </a>
        </div>
    </div>

    </div>
    )
}
export default Portfolio;
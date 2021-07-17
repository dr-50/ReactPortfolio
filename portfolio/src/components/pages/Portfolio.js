import React, { useState } from 'react'
import craftReviewImg from "../../assets/images/review-crafts.jpg"
import songsAndSpirts from "../../assets/images/songs-and-spirts.jpg"
import weatherImg from "../../assets/images/weather.jpg"
import runBuddyImg from "../../assets/images/run-buddy.png"
import workCalendarImg from "../../assets/images/work-calendar.jpg"
import techblogImg from "../../assets/images/techblog.jpg"
import GitHubLogo from "../../assets/images/GitHub-Mark-32px.png"
import WebLinkLogo from "../../assets/images/website-icon-29492-Windows.ico"


function Portfolio(){
    return (
    <div>
    <div className="portfolio-card one">
  
        <img src={craftReviewImg} className="my-2" alt=""/>
        <a href="https://github.com/mspierings96/Craft-Reviews"> <img src={GitHubLogo} /> </a>
        <a href="https://review-crafts.herokuapp.com/"> <img src={WebLinkLogo} width="32px"/> </a>
    </div>
    < div className="portfolio-card two">
        <img src={songsAndSpirts} className="my-2" alt=""/>
       <a href="https://github.com/adamlsn/songsAndSpirits"><img src={GitHubLogo} /></a>
       <a href="https://adamlsn.github.io/songsAndSpirits/"> <img src={WebLinkLogo} width="32px"/> </a>
    </div>
    <div classname="portfolio-card three">
        <img src={weatherImg} className="my-2" alt="" />
        <a href="https://github.com/dr-50/WeatherDashboard"><img src={GitHubLogo} /> </a>
        <a href="https://dr-50.github.io/WeatherDashboard/"><img src={WebLinkLogo} width="32px" /> </a>
    </div>

    <div classname="portfolio-card four">
        <img src={runBuddyImg} className="my-2" alt="" />
        <a href="https://github.com/dr-50/RunBuddy"><img src={GitHubLogo} /> </a>
        <a href="https://dr-50.github.io/RunBuddy/"><img src={WebLinkLogo} width="32px" /> </a>
    </div>

    <div classname="portfolio-card five">
        <img src={workCalendarImg} className="my-2" alt="" />
        <a href="https://github.com/dr-50/WorkCalendar"><img src={GitHubLogo} /> </a>
        <a href="https://dr-50.github.io/WorkCalendar/"><img src={WebLinkLogo} width="32px" /> </a>
    </div>

    <div classname="portfolio-card six">
        <img src={techblogImg} className="my-2" alt="" />
        <a href="https://github.com/dr-50/TechBlog"><img src={GitHubLogo} /> </a>
        <a href="https://tech-blog-dr-50.herokuapp.com/"><img src={WebLinkLogo} width="32px" /> </a>
    </div>

    </div>
    )
}
export default Portfolio;
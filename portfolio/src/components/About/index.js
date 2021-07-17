import React from 'react';
import personalImg from '../../assets/images/personal-photo.jpg'


function About() {
    return (
        <section>
            <h1 id="about">About Me</h1>
            <img src={personalImg} className="my-2" style={{ width: "10%", minWidth:"150px", height: "200px" }} alt="cover"/>
            <p>lorem ipsum </p>
        </section>
    )
}

export default About;
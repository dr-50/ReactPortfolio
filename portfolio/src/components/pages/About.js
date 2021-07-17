import React from "react";
import personalImg from "../../assets/images/personal-photo.jpg";

function About() {
  return (
    <section>
      <h1 id="about">About Me</h1>
      <img
        src={personalImg}
        className="my-2"
        style={{ width: "10%", minWidth: "150px", height: "200px" }}
        alt="cover"
      />
      <h3>Current Responsibilities</h3>
      <p>
        Current an embedded technical resource for a forecasting department within a Fortune 500 company. 
      </p>
      <h3>Passions</h3>
      <p>
        Self proclaimed forever student. Eager to build on current academic
        foundations in Business and Economics as well as branching into new
        areas including to web development.
      </p>
    
    </section>
  );
}

export default About;

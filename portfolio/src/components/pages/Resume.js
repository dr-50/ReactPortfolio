import React from "react";
import ResumeLink from "../../assets/Resume.pdf";
import ResumeImg from "../../assets/images/ResumePageOne.JPG"

function Resume() {
  return (
    <section className="resume">
      <div className="resume-download">
        <a href={ResumeLink} target="_blank" rel="noreferrer">
          Download Full Resume
        </a>
      </div>
      <div className="resume-image">
        <img src={ResumeImg} alt=""></img>
      </div>
    </section>
  );
}

export default Resume;

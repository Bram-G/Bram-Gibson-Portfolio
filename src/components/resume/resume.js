import React from "react";
import "./style.css";
import resumePic from "./assets/resume.png";
import resume from "./assets/Resume.pdf"

const Resume = () => {
  return (
    <div id="resumeCon">
      <div className="row container">
        <div id="resumePicStyle" className="col-6">
          <img id="resumePic" src={resumePic} alt="resume logo"></img>
        </div>
        <div id="resumeContainer" className="col-6">
          <div id="resumeTextBox row-8">
            <p id="resumeTitle">Download My Resume</p>
            <p id="resumeTextBox">Use the button below to download my resume!</p>
            <a href={resume} download>
            <button type="button" class="btn btn-lg btn-primary">Primary</button>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

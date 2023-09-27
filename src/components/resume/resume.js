import React from "react";
import "./style.css";
import resumePic from "./assets/resume.png";
// import resume from "./assets/Resume.pdf"

const Resume = () => {
  return (
    <div id="resumeCon">
      <div className="row container">

        <div id="resumeContainer" className="col">
          <div id="resumeTextBox row-8">
            <p id="resumeTitle">Download My Resume</p>
            <p id="resumeTextBox">Use the button below to download my resume!</p>
            {/* <a href={resume} download> */}
            <button type="button" className="btn btn-lg btn-primary">Download</button>
          {/* </a> */}
          </div>
        </div>
                <div id="resumePicStyle" className="col">
          <img id="resumePic" src={resumePic} alt="resume logo"></img>
        </div>
      </div>
    </div>
  );
};

export default Resume;

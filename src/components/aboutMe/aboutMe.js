import React from "react";
import "./style.css";
import me from "./assets/aboutMe.png";

const AboutMe = () => {
  return (
    <div id="mainContainer" className="container">
      <div className="col">
        <img id="image" src={me} alt="Me" />
      </div>
      <div>
        <div id="text" className="top-box container">
          <p>
            I’m Bram, a <span id="spanBlue">FullStack Web Developer </span> that
            recently graduated from the University of Washington's Coding
            Bootcamp.
          </p>
        </div>
        <div className="container">
          <p id="textBottom">
            During my bootcamp experience, I had the opportunity to learn and
            work with a variety of languages, frameworks, and tools including
            HTML, CSS, JavaScript, React, JQuery, Express.js, Node.js, and more.
            I also gained experience in agile development methodologies and
            collaborative project management, both of which I believe are
            crucial skills for any developer. I'm eager to take the skills and
            knowledge that I've gained and apply them to real-world projects.
            Feel free to reach out to me with any questions or inquiries!
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;

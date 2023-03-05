import React from "react";
import "./style.css";
import me from "./aboutMe.png";

const AboutMe = () => {
  return (
    <div id="mainContainer" className="container">
      <div className="col">
        <img id="image" src={me} alt="Me" />
      </div>
      <div>
        <div id="text" className="top-box container">
          <p>
            I’m Bram, a <span id="spanBlue">junior software engineer</span>{" "}
            currently taking a fullstack web development program through the
            University of Washington.
          </p>
        </div>
        <div className="container">
          <p id="textBottom">
            This course helped build a solid foudation by covering in-demand
            skills like HTML5, CSS3, JavaScript, jQuery, Express.js, React.js,
            Node.js, progressive web apps, agile methodology, computer science,
            database theory, MongoDB, MySQL and Git. On this website are
            previous projects I have made as well as links to their respective
            GitHub repos. Feel free to reach out to me with any questions or
            inquiries!
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;

import React from "react";
import "./style.css";
import me from "./assets/AboutMe.png";

import styled, { keyframes } from "styled-components";

const AboutMe = () => {
  const gradient = keyframes`
{
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}}
`;
  const AnimatedGradientText = styled.h1`
    position: relative;
    overflow: hidden;
    font-weight: 700;
    font-size: 42px;
    margin: 0;
    display: inline-block;
    animation: ${gradient} 5s ease-in-out infinite;
    background: linear-gradient(to right, #464646, #253763, #3c579b, #4769bf);
    background-size: 300%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `;

  return (
    <div id="mainContainer" >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
      </style>
      <div className="aboutImageContainer">
        <div id="imageBox">
          <img id="image" src={me} alt="Me" />
        </div>
      </div>
      <div id="textCon">
        <div id="text" className="topBox">
          <div className="backgroundp">
            I’m Bram, a{" "}
            <AnimatedGradientText className="move">
              FullStack Web Developer{" "}
            </AnimatedGradientText>{" "}
            that recently graduated from the University of Washington's Coding
            Bootcamp.
          </div>
        </div>
        <div className="bottomContainer">
          <div id="bottom">
            <p id="textBottom">
              During my bootcamp experience, I had the opportunity to learn and
              work with a variety of languages, frameworks, and tools including
              HTML, CSS, JavaScript, React, JQuery, Express.js, Node.js, and
              more. I also gained experience in agile development methodologies
              and collaborative project management, both of which I believe are
              crucial skills for any developer. I'm eager to take the skills and
              knowledge that I've gained and apply them to real-world projects.
              Feel free to reach out to me with any questions or inquiries!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;

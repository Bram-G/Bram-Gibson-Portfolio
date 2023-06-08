import React from "react";
import "./style.css";
import cube1 from "./assets/cube1.png";
import css3 from "./assets/css3.svg";
import github from "./assets/github.svg";
import html from "./assets/html.svg";
import javascript from "./assets/javascript.svg";
import jquery from "./assets/jquery.svg";
import mongodb from "./assets/mongodb.svg";
import mysql from "./assets/mysql.svg";
import nodejs from "./assets/nodejs.svg";
import react from "./assets/react.svg";

function BreakerOne() {
  return (
    <div className="breakerOne">
      <img id="cube1" src={cube1}></img>
      <div id="breakBoxOne">
        <div className="iconBox">
          <img className="iconImg" src={javascript} alt="JavaScript"></img>
          <div className="iconText">JavaScript</div>
        </div>
        <div className="iconBox">
          <img className="iconImg" src={react} alt="React"></img>
          <div className="iconText">React</div>
        </div>
        <div className="iconBox">
          <img className="iconImg" src={html} alt="HTML"></img>
          <div className="iconText">HTML</div>
        </div>
        <div className="iconBox">
          <img className="iconImg" src={css3} alt="CSS"></img>
          <div className="iconText">CSS</div>
        </div>
        <div className="iconBox">
          <img className="iconImg" src={nodejs} alt="NodeJS"></img>
          <div className="iconText">NodeJS</div>
        </div>
        <div className="iconBox">
          <img className="iconImg" src={jquery} alt="JQuery"></img>
          <div className="iconText">JQuery</div>
        </div>
        <div className="iconBox">
          <img className="iconImg" src={mysql} alt="MySQL"></img>
          <div className="iconText">MySQL</div>
        </div>
        <div className="iconBox">
          <img className="iconImg" src={mongodb} alt="MongoDB"></img>
          <div className="iconText">MongoDB</div>
        </div>
        <div className="iconBox">
          <img className="iconImg" src={github} alt="Git"></img>
          <div className="iconText">Git</div>
        </div>
      </div>
    </div>
  );
}

export default BreakerOne;

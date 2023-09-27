import React from "react";
import "./style.css";
import contact from "./assets/contact.png";
import BootstrapForm from "./Form";
import sphere1 from "./assets/sphere1.png";
import texture from "./assets/texture.png";

const Contact = () => {
  return (
    <div id="contactCon">
      <div className="contactBox">
        {/* <img id="texture" src={texture} alt="texture"></img> */}
      <div id="texture"></div>
      <div className="row formContainer ">
        <div id="contactContainer" className="col">
        <div id="contactTextBox row-8">
            <p id="contactTitle">Get in Touch</p>
            <p id="contactTextBox"> Email me at: <a href="mailto: Bram.gibson@hotmail.com"> Bram.gibson@hotmail.com </a></p>
            <p id="contactTextBox">Or feel free to reach out to me here with any questions or inquiries!</p>
            <BootstrapForm/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import "./style.css";
import contact from "./assets/contact.png";
import BootstrapForm from "./Form";

const Contact = () => {
  return (
    <div id="contactCon">
      <div className="row container">
        <div id="contactImgStyle" className="col-6">
          <img id="contactImg" src={contact} alt="contact logo"></img>
        </div>
        <div id="contactContainer" className="col-6">
        <div id="contactTextBox row-8">
            <p id="contactTitle">Get in Touch</p>
            <p id="contactTextBox">Feel free to reach out to me with any questions or inquiries!</p>
            <BootstrapForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

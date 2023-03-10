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
            <p id="contactTextBox"> Email me at: <a href="mailto: Bram.gibson@hotmail.com"> Bram.gibson@hotmail.com </a></p>
            <p id="contactTextBox">Or feel free to reach out to me here with any questions or inquiries!</p>
            <BootstrapForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

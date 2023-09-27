import React from "react";
import "./style.css";
import BootstrapForm from "./Form";

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

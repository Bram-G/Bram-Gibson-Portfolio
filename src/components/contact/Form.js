import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React, { useState, setState } from "react";
import { send } from "emailjs-com";

function BootstrapForm() {
  const [toSend, setToSend] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(toSend)
    send("service_ifk7q91", "template_9yvp0sj", toSend, "fl_Rc0XQT4ThemV1h");
    alert(`Thank you for your message, ${toSend.from_name}! I will get back to you as soon as possible`)
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <Form id="form" onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="from_name"
          value={toSend.from_name}
          onChange={handleChange}
          type="name"
          placeholder="Enter Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="from_email"
          value={toSend.from_email}
          onChange={handleChange}
          type="email"
          placeholder="Enter Email"
        />
      </Form.Group>
      <Form.Label>Message</Form.Label>
      <Form.Group>
        <Form.Control
          name="message"
          value={toSend.message}
          onChange={handleChange}
          type="text"
          as="textarea"
          placeholder="Message"
        />
      </Form.Group>
      <Button className="formButton" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BootstrapForm;

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function BootstrapForm() {
  return (
    <Form id="form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>
      <Form.Label>Message</Form.Label>
      <InputGroup>
        <Form.Control as="textarea" />
      </InputGroup>
      <Button className="formButton"variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BootstrapForm;

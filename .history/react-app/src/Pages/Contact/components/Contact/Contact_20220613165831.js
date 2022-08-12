import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./Contact.module.css";
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Contacts() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );
<
  const handleChange = (event) => {
    setTextarea(event.target.value)
  }
  return (
    <Container>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>İSIM SOYISIM</Form.Label>
            <Form.Control type="İSIM SOYISIM" placeholder="İsim Soyisim" />
          </Form.Group>

        </Row>

        <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>TELEFON</Form.Label>
            <Form.Control type="number" placeholder="Telefon " />
          </Form.Group>

          <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
export default Contacts;

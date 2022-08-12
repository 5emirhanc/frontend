import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import "./Contact.module.css";

function Contacts() {
  return (
    <Container className="">
      <Form className=" form">
        <Col>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>İSIM SOYISIM</Form.Label>
            <Form.Control type="İSIM SOYISIM" placeholder="İsim Soyisim" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>TELEFON</Form.Label>
            <Form.Control type="tel" placeholder="Telefon " />
          </Form.Group>

          <Form.Group controlId="formTelepone">
            <Form.Label for="exampleFormControlTextarea1" class="form-label">
              MESAJ
            </Form.Label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Mesaj "
              rows="3"
            ></textarea>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button
              variant="primary"
              size="lg"
              type="submit"
              className="txtbtn"
            >
              Gönder
            </Button>
          </div>
        </Col>
        <Col>
        
        </Col>
      </Form>
    </Container>
  );
}
export default Contacts;

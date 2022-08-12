import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./Contact.module.css";

function Contacts() {
  return (
    <Container className="bg-light">
      <Form className="bg-white">
        <Row className="row">
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
            <Form.Control type="tel" placeholder="Telefon " />
          </Form.Group>

         <Form.Group controlId="formMessage">
          <Form.Label>MESAJ</Form.Label>
            <Form.Control type="textarea" placeholder="Mesaj"/>
          </Form.Group>

          <Form.Group className="col-md-12">
            
            </Form.Group>  
      </Form>
      
    </Container>
  );
}
export default Contacts;

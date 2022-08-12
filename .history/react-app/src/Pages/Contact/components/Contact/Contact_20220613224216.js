import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import "./Contact.module.css";

function Contacts() {
  return (
    <Container className="bg-light">
      <div className="d-grid gap-2">
        <h1>BukyTalk Adres</h1>
        <p>
          Fulya Mahallesi Yeşilçimen <p>Sokak Polat Tower Bağımsız </p>
          <p>Bölüm 430, 34394 Şişli/İstanbul</p>{" "}
          <a
          target="_blank"
          class="fa fa-whatsapp"
          href="https://wa.me/905419196898?text=Merhaba+Kurumsal+Firmamız+İçin+Olarak+Bilgi+Alabilirmiyiz."
        >
          0541 919 68 98
        </a>
        </p>
       
      </div>
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

        <Form.Group controlId="formTelepone">
          <Form.Label>MESAJ</Form.Label>
          <Form.Control type="textarea" placeholder="Mesaj" />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            Gönder
          </Button>
        </div>
      </Form>
    </Container>
  );
}
export default Contacts;

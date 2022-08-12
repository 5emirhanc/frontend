import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Maps from "./components/Map/Map";
import Contacts from "./components/Contact/Contact";
function Contact() {
  return (
    <Container fluid>
      <Row>
        <Navbar />
      </Row>
      <Row>
        <Maps/>
      </Row>
      <Row>
        <Contacts/>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default Contact;

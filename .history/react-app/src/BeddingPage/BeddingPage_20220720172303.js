import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NavbarSmall from "./components/Navbar/NavbarSmall";
import second from './components/Card/Card.js';
import Footer from './components/Footer/Footer';
function BeddingPage() {
  return (
    <Container fluid>
      <Row>
        <NavbarSmall/>
      </Row>
      <Row>
        <Cards />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default BeddingPage;

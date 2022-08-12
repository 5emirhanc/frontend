import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "./components/Corusel/Corusel";
import Cards from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import NavbarSmall from "./components/Navbar/NavbarSmall";

function SingIn() {
  return (
    <Container fluid>
      <Row>
        <Navbar />
      </Row>
      <Row>
        <NavbarSmall></NavbarSmall>
      </Row>
      <Row>
        <Carousel />
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

export default SingIn;

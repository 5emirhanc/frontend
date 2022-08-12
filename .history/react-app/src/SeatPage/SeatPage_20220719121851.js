import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "./components/Corusel/Corusel";
import Navbar from "./components/Navbar/NavbarSmall"

function LoginHomePage() {
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

export default LoginHomePage;

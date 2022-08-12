import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "./components/Corusel/Corusel";
import NavbarSmall from "./components/Navbar/NavbarSmall";
import second from './components/Card/'
function LoginHomePage() {
  return (
    <Container fluid>
      
      <Row>
        <NavbarSmall/>
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

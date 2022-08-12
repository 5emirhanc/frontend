import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "./components/Corusel/Corusel";
import second from 'first'
import Footer from "./components/Footer/Footer";
import NavbarSmall from "./components/Navbar/NavbarSmall";

function Home() {
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
        <ProductsList />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default Home;

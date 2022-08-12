import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";


function AboutUs() {
  return (
    <Container fluid>
      <Row>
    <Navbar/>
      </Row>
      <Row>
        <About/>
      </Row>
      <Row>
        <Footer/>
      </Row>
    </Container>
  );
}

export default AboutUs;

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
function SingIn() {
  return (
    <Container fluid>
      <Row>
       <Navbar/>
      </Row>
      <Row>
       <Navbar/>
      </Row>
    </Container>
  );
}

export default SingIn;

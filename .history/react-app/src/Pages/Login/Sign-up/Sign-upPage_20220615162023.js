import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import second from "./components/LoginForm/LoginForm"
function SingIn() {
  return (
    <Container fluid>
      <Row>
       <Navbar/>
      </Row>
      <Row>
       <Footer/>
      </Row>
    </Container>
  );
}

export default SingIn;

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NavbarSmall from "./components/Navbar/NavbarSmall";
import Cards from './components/Card/Card';
import Footer from './components/Footer/Footer';
function KitchenPage() {
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

export default KitchenPage;

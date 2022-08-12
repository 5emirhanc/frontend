import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
function NavbarSmall() {
  return (

    <Navbar bg="light" expand="lg">
      <div class="stage">
        <div class="wrapper">
          <div class="slash"></div>
          <div class="sides">
            <div class="side"></div>
            <div class="side"></div>
            <div class="side"></div>
            <div class="side"></div>
          </div>
          <div class="text">
            <div class="text--backing">BUKYTALK</div>
            <div class="text--left">
              <div class="inner">BUKYTALK</div>
            </div>
            <div class="text--right">
              <div class="inner">BUKYTALK</div>
            </div>
          </div>
        </div>
      </div>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#SeatPage">Koltuk Takımı</Nav.Link>
          <Nav.Link href="#yatak">YatakTakımı</Nav.Link>
          <Nav.Link href="#mutfak">Mutfak Takımı</Nav.Link>
          <Nav.Link href="#halı">Halılar</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarSmall;

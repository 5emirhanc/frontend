import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";



function Navbarr() {

  return (
    <Navbar
      className=" "
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      s
    >
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
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/LoginHomePage">AnaSayfa</Nav.Link>
          <Nav.Link href="/LoginAboutus">Hakkımızda</Nav.Link>
          <Nav.Link href="/LoginContact" >İletişim</Nav.Link>
        </Nav>
        <Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navbarr;

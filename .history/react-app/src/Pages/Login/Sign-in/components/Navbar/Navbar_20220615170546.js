import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navbarr() {
  return (
    <Navbar
      className="Navbar"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      s
    >
      <div className="stage">
        <div className="wrapper">
          <div className="slash"></div>
          <div className="sides">
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
          </div>
          <div className="text">
            <div className="text--backing">BUKYTALK</div>
            <div className="text--left">
              <div className="inner">BUKYTALK</div>
            </div>
            <div className="text--right">
              <div className="inner">BUKYTALK</div>
            </div>
          </div>
        </div>
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">AnaSayfa</Nav.Link>
          <Nav.Link href="/about">Hakkımızda</Nav.Link>
          <Nav.Link href="/contact">İletişim</Nav.Link>
          <Nav.Link href="">İptal/İade</Nav.Link>
          <Nav.Link href="">Sipariş Takip</Nav.Link>
        </Nav>
        <Nav></Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navbarr;

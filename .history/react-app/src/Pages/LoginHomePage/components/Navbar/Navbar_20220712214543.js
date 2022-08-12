import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navbarr() {
  const fullname = localStorage.getItem('name');
  return (
    <Navbar
      className="Navbar"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      s
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">AnaSayfa</Nav.Link>
          <Nav.Link href="/about">Hakkımızda</Nav.Link>
          <Nav.Link href="/contact" >İletişim</Nav.Link>
          <Nav.Link href="" >İptal/İade</Nav.Link>
          <Nav.Link href="" >Sipariş Takip</Nav.Link>
        </Nav>
            
              <h5>{fullname}</h5>
          
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navbarr;

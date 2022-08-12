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
          <Nav.Link href="/LoginHomePage">AnaSayfa</Nav.Link>
          <Nav.Link href="/LoginAboutus">Hakkımızda</Nav.Link>
          <Nav.Link href="/LoginContact" >İletişim</Nav.Link>
        </Nav>
            <h5 style={{margin-left:0}}>{fullname}</h5>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navbarr;
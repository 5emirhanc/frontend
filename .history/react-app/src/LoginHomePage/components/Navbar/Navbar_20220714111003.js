import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import CloseButton from 'react-bootstrap/CloseButton';
import { useNavigate } from "react-router-dom";

function Navbarr() {
  const navigate = useNavigate();
  navigate("/");


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
            <h5 style={{margin:0}}>{fullname}</h5>
              <a class="button">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </a>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navbarr;

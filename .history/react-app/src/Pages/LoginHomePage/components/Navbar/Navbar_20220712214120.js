import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState, useEffect } from "react";
import axios from "axios";



function Navbarr() {

  const [products, setProduct] = useState([]);
  const fullname = localStorage.getItem('name');
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProduct(response.data);
  };
 

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
        {products.map((product) => (
            <tr>
              <td>{fullname}</td>
            </tr>
          ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navbarr;

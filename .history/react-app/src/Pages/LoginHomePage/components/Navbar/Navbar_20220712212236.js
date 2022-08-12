import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {Link}   from "react-router-dom";



function Navbarr() {

  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProduct(response.data);
  };
 


  let navigate = useNavigate(); 
  const routeSignIn = () =>{ 
    let path = `SignIn`; 
    navigate(path);
  }
  const routeSignUp = () =>{ 
    let path = `SignUp`; 
    navigate(path);
  }
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
        {products.map((product ) => (
            <tr>
              <td>{product.id} </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`/edit/${product.id}`} className="button is-small is-info">Edit</Link>
              </td>
            </tr>
          ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navbarr;

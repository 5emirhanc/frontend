import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import { useState, useEffect } from "react";
import halı1 from '../images/halı1.jpg';
import halı2 from '../images/halı2.jpg';
import halı3 from '../images/halı3.jpg';
import axios from "axios";
import "./Card.css";


function Cards() {
  const [products, setProdut] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {}, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products/state");
    setProdut(response.data);
  };

  const images = [halı1,halı2,halı3];

  return (
    <div>
     
        <CardGroup className="crdgrp">
          {products.map((product,index) => (
            <Card>
              <Card.Body>
                <Card.Img style={{height}} variant="top" src={images[index]} />
                <Card.Title>{product.ProductName}</Card.Title>
                <Card.Text><p>{product.ProductContant}</p></Card.Text> 
               </Card.Body>
                
              <Card.Footer>
                <Button className="btn" variant="outline-success">
                  Satın Almak İçin Bizimle İletişime Geçin...
                </Button>
              </Card.Footer>
            </Card>
             ))}
        </CardGroup>
   
    </div>
  );
}

export default Cards;

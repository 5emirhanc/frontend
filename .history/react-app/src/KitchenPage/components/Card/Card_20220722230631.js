import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import { useState, useEffect } from "react";
import mutfak1 from "../images/mutfak1.jpg";

import axios from "axios";
import "./Card.css";


function Cards() {
  const [products, setProdut] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {}, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products/kitchen");
    setProdut(response.data);
  };

  const images = [];

  return (
    <div>
     
        <CardGroup className="crdgrp">
          {products.map((product,index) => (
            <Card>
              <Card.Body>
                <Card.Img  variant="top" src={images[index]} />
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

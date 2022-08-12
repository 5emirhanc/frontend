import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import { useState, useEffect } from "react";
import yatak1 from "../images/yatak1.jpg";
import yatak2 from "../images/yatak2.jpg";
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

  const images = [yatak1, yatak2];

  return (
    <div>
     
        <CardGroup className="crdgrp">
          <tr>
            <Card>
              {products.map((product,index) => (
              <Card.Body>
                <Card.Img style={{height:{40}}} variant="top" src={images[index]} />
                <Card.Title>{product.ProductName}</Card.Title>
                <Card.Text>{product.ProductContant}</Card.Text>
              </Card.Body>
                 ))}
              <Card.Footer>
                <Button className="btn" variant="outline-success">
                  Satın Almak İçin Tıkla{" "}
                </Button>
              </Card.Footer>
            </Card>
          </tr>
        </CardGroup>
   
    </div>
  );
}

export default Cards;

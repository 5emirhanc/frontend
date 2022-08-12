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
    const response = await axios.get("http://localhost:5000/products/bead");
    setProdut(response.data);
  };

  const [images,setImages] = useState([yatak1, yatak2]);
  return (
    <div>
      {products.map((product,imgs) => (
        <CardGroup className="crdgrp">
          <tr>
            <Card>
              <Card.Img src={imgs[0]} />
              <Card.Body>
                <Card.Title>{product.ProductName}</Card.Title>
                <Card.Text>{product.ProductContant}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button className="btn" variant="outline-success">
                  Satın Almak İçin Tıkla{" "}
                </Button>
              </Card.Footer>
            </Card>
          </tr>
        </CardGroup>
      ))}
    </div>
  );
}

export default Cards;

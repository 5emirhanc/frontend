import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import { useState, useEffect } from "react";
import yatak1 from "../images/yatak1.jpg";
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
  return (
    <CardGroup className="crdgrp">
      {products.map((product) => (
        <tr>
          <Card>
            <Card.Img className="rsm" variant="top" src={yatak1} />
            <Card.Body>
              <Card.Title>{product.ProductName[""]}</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="btn" variant="outline-success">
                Satın Almak İçin Tıkla{" "}
              </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              className="rsm"
              variant="top"
              src="https://img.vivense.com/aE35D0odgT6yysoHH52O0qwJiaA=/images/f87aad3bc01148469c47b8d7b5fcafed.jpg"
            />
            <Card.Body>
              <Card.Title>{product.ProductName}</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="btn" variant="outline-success">
                Satın Almak İçin Tıkla{" "}
              </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              className="rsm"
              variant="top"
              src="https://img.vivense.com/ayNOoGtxHuHMe0VJeou7ED9xPmo=/images/eb9c2324fa854f29aab48869a606677c.jpg"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="btn" variant="outline-success">
                Satın Almak İçin Tıkla{" "}
              </Button>
            </Card.Footer>
          </Card>
        </tr>
      ))}
    </CardGroup>
  );
}

export default Cards;

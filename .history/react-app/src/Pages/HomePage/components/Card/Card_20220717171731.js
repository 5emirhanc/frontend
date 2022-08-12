import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import "./Card.css";
import { useState } from "react";
import axios from "axios";


function Cards() {
  const [fileName, setfileNamel] = useState("");
  const [ImagePath, setŞifre] = useState("");


  const Login = async (e) => {
    e.preventDefault();
    await axios
      .post('http://localhost:5000/products/file', {
        fileName: fileName,
        ImagePath: ImagePath,
      })
      .then(function (response) {
        const fileNames = localStorage.getItem('fileName');
      });
      
  };

  
  return(
    <Card>
            <Card.Img
              className="rsm"
              variant="top"
              src="https://img.vivense.com/2YTYOVRi9tgvVr-Sdv-zmgUjsHE=/images/325d5a1e1587465a8d04187d13a1acbb.jpg"
            />
            <Card.Body>
              <Card.Title>{fileNames}</Card.Title>
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
          </Card>);
        }

export default Cards;



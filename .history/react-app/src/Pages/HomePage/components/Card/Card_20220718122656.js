import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import "./Card.css";
import { useState,useEffect } from "react";
import axios from "axios";


function Cards() {
  const [fileProduct, setFileProduct] = useState([]);

  useEffect(() => {
    File();
  }, []);


  const File = async () => {
    const response = await axios
      .get('http://localhost:5000/products/file');
      setFileProduct(response.data);
  
      
  };


  return(
    <div>

      <Card>
            <Card.Img
              className="rsm"
              variant="top"
              src="https://img.vivense.com/2YTYOVRi9tgvVr-Sdv-zmgUjsHE=/images/325d5a1e1587465a8d04187d13a1acbb.jpg"
            />
            <Card.Body>
              <Card.Title>{}</Card.Title>
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

  </div>

  );
        
}


export default Cards;



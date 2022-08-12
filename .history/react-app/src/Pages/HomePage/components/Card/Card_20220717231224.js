import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import "./Card.css";
import { useState } from "react";
import axios from "axios";


function Cards() {
  const [fileName, setFileName] = useState("");
  const [ImagePath, setImagePath] = useState("");

  const File = async (e) => {
   
    await axios
      .get('http://localhost:5000/products/file')
      .then(function (response) {
        console.log(response.data);
        setFileName(response.data.fileName)

      });
      
  };

    File();

  return(
    <div>

      <Card>
            <Card.Img
              className="rsm"
              variant="top"
              src="https://img.vivense.com/2YTYOVRi9tgvVr-Sdv-zmgUjsHE=/images/325d5a1e1587465a8d04187d13a1acbb.jpg"
            />
            <Card.Body>
              <Card.Title>{res.data.fileName}</Card.Title>
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



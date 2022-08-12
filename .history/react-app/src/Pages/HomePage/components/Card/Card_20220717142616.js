import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import "./Card.css";
import { useState } from "react";
import axios from "axios";

function componentDidMount() {
  // Simple GET request using axios
  axios.get("http://localhost:5000/products/file").then((response) => {
    this.setTitle = response.fileName;
    localStorage.setItem("res", response);
  });
}

function Cards() {
  const [title, setTitle] = useState("");
  const [şifre, setFile] = useState("");
  componentDidMount();
  return;

  <div>
    <table>
      <tbody>
        <tr>
          {(() => {
            for (let i = 1; i <= localStorage.getItem("res").length; i++) {
              <Card>
                <Card.Img
                  className="rsm"
                  variant="top"
                  src="https://img.vivense.com/2YTYOVRi9tgvVr-Sdv-zmgUjsHE=/images/325d5a1e1587465a8d04187d13a1acbb.jpg"
                />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
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
              </Card>;
            }
            return td;
          })()}
        </tr>
      </tbody>
    </table>
  </div>;
}

export default Cards;

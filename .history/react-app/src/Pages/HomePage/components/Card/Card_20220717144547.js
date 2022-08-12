import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import "./Card.css";
import { useState } from "react";
import axios from "axios";

function Cards() {
  const [data, setdata] = useState("");
  const [şifre, setFile] = useState("");
    axios.get("http://localhost:5000/products/file").then((response) => {
      setdata(response.data);
      localStorage.setItem("res", response.data.length);
    });
    
  
  return(
    <div>

      {(() => {
        const options = [];

        for (let i = 0; i <= 9; i++) {
          options.push('ss');
        }

        return options;
      })()}
  </div>

  );
        
}


export default Cards;

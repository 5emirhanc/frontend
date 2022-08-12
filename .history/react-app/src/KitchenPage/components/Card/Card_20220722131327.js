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
    
   <div></div> 
      ))}
   
  );
}

export default Cards;

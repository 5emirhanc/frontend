import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import { useState , useEffect } from "react";
import yatak1 from '../images/yatak1.jpg'
import axios from"axios";

import "./Card.css"
function Cards() {
  const [products, setProdut]= useState([]);
    useEffect(()=>{
      getProducts();
    },[]);

    useEffect(() => {
   
    }, [])

    const getProducts = async ()=>{
      const response = await axios.get("http://localhost:5000/products/bead");
      setProdut(response.data);


    };
  return (
<CardGroup className="crdgrp">
{products.map((product) => (
            <tr>
              <td>{product.ProductName}</td>
              <td>
                <img></img>
              </td>
              <td>{product.ProductContant}</td>
              <td>
                <button className="btn">Satın al</button>
              </td>
            </tr>
          ))}
  
</CardGroup>
  );
}

export default Cards;

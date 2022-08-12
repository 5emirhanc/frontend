import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import "./Card.css";
import { useState } from "react";
import axios from "axios";

function res(){

  axios.get("http://localhost:5000/products/file").then((response) => {
    localStorage.setItem('data',response.data);
    localStorage.setItem("res", response.data.length);
  });
}
function Cards() {


    
  
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

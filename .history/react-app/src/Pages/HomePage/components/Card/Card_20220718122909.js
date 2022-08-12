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
      <tbody>
        {fileProduct.map((fileProduct)=>{
          <tr>
            <td>{fileProduct.id}</td>
            <td>{fileProduct.fileName}</td>
            <td>{fileProduct.ImagePath}</td>
          </tr>
        })}
      </tbody>
  </div>

  );
        
}


export default Cards;



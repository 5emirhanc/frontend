/* eslint-disable jsx-a11y/alt-text */
import { useState , useEffect } from "react";
import Yatak1 from '../images/yatak1.jpg'
import axios from"axios";

export const ProductsList=()=>{
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

    return(
      <div>
        <table className="table is-striped is-fullwidth">
        <tbody>
          {products.map((product) => (
          <tr>
            <td>{product.ProductName}</td>
            <td><img></img></td>
            <td>{product.ProductContant}</td>
            <td><button className="btn">Satın al</button></td>
          </tr>
          ))}
        </tbody>
        </table>
      </div>
    )
}

export default ProductsList;
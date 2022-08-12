/* eslint-disable jsx-a11y/alt-text */
import { useState , useEffect } from "react";
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
    const ProductImage = localStorage.setItem('ProductImage');

    return(
      <div>
        <table className="table is-striped is-fullwidth">
        <tbody>
          {products.map((product) => (
          <tr>
            <td>{product.id}</td>
            <td>{product.ProductName}</td>
            <td><img src={ProductImage}></img></td>
            <td>{product.ProductContant}</td>
          </tr>
          ))}
        </tbody>
        </table>
      </div>
    )
}

export default ProductsList;
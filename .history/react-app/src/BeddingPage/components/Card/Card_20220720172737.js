/* eslint-disable array-callback-return */
import { useState , useEffect } from "react";
import axios from"axios";

export const ProductsList=()=>{
    const [products, setProdut]= useState([]);

    useEffect(()=>{
      getProducts();
    },[]);

    const getProducts = async ()=>{
      const response = await axios.get("http://localhost:5000/products/bead");
      setProdut(response.data);
    };

    return(
      <div>
        <table className="table is-striped is-fullwidth">
        <tbody>
          {products.map((product) => {
          <tr>
            <td>{product.id}</td>
            <td>{product.ProductName}</td>
            <td>{product.ProductImage}</td>
            <td>{product.ProductContant}</td>
          </tr>
          })}
        </tbody>
        </table>
      </div>
    )
}

export default ProductsList;
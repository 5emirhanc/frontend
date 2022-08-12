/* eslint-disable jsx-a11y/alt-text */
import { useState , useEffect } from "react";
import axios from"axios";

export const ProductsList=()=>{
    const [products, setProdut]= useState([]);
    const [products, setProdut]= useState([]);

    useEffect(()=>{
      getProducts();
    },[]);

    useEffect(() => {
      if(products) {
        setImage(Buffer.from(media.data, 'binary').toString('base64')) 
      }
    }, [])

    const getProducts = async ()=>{
      const response = await axios.get("http://localhost:5000/products/bead");
      setProdut(response.data);
      console.log(response.data)
      console.log(window.URL.createObjectURL(new Blob(response.data[0].ProductImage.data[0], {type: "buffer"})),"image")
      
    };

    return(
      <div>
        <table className="table is-striped is-fullwidth">
        <tbody>
          {products.map((product) => (
          <tr>
            <td>{product.id}</td>
            <td>{product.ProductName}</td>
            <td><img src=""></img></td>
            <td>{product.ProductContant}</td>
          </tr>
          ))}
        </tbody>
        </table>
      </div>
    )
}

export default ProductsList;
/* eslint-disable jsx-a11y/alt-text */
import { useState , useEffect } from "react";
import axios from"axios";

export const ProductsList=()=>{
    const [products, setProdut]= useState([]);
    const [imgs, setImage]= useState();

    useEffect(()=>{
      getProducts();
    },[]);

    useEffect(() => {
   
    }, [])

    const getProducts = async ()=>{
      const response = await axios.get("http://localhost:5000/products/bead");
      setProdut(response.data);
      console.log(response.data)
      console.log(window.URL.createObjectURL(new Blob(response.data[0].ProductImage.data[0], {type: "buffer"})),"image")
        setImage(Buffer.from(response.data[0].ProductImage.data[1], 'binary').toString('base64')) 
        console.log(imgs,)
    
    };

    return(
      <div>
        <table className="table is-striped is-fullwidth">
        <tbody>
          {products.map((product) => (
          <tr>
            <td>{product.id}</td>
            <td>{product.ProductName}</td>
            <td><img width={60} src={imgs}>{imgs}</img></td>
            <td>{product.ProductContant}</td>
          </tr>
          ))}
        </tbody>
        </table>
      </div>
    )
}

export default ProductsList;
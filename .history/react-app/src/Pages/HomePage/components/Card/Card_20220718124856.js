import { useState, useEffect } from "react";
import axios from "axios";
import {Link}   from "react-router-dom";
export const ProductsList = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products/file ");
    setProduct(response.data);
  };
  return (
    <div>
        <Link to="/add" className="button is-primary mt-2"> Add New</Link>
      <table className="table is-striped is-fullwidth">
      
        <tbody>
          {products.map((product ) => (
            <tr>
              {product.id}
              <td>{product.fileName}</td>
              <td>{product.şifre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
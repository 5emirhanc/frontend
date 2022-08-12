/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import axios from "axios";

export const ProductsList = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products/file");
    setProduct(response.data);
  };

  return (
    <div>
      <table className="table is-striped is-fullwidth">
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.id} </td>
              <td>{product.fileName}</td>
              <td><img src={product.data.ImagePath}></img></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;

import { useState, useEffect } from "react";
import axios from "axios";
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
      <table className="table is-striped is-fullwidth">
        <tbody>
          <tr>
        {products.map((product) => (
          <td>{product.fileName}</td>
      ))}
    </tbody>
    </table>
    </div>
  );
};

export default ProductsList;

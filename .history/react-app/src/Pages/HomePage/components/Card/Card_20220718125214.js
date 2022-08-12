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
        {products.map((product) => (
          <p>{product.fileName}</p>
        ))}
        <image></img>
    </div>
  );
};

export default ProductsList;

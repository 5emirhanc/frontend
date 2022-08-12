import { useState, useEffect } from "react";
import axios from "axios";
import {Link}   from "react-router-dom";

export const ProductsList = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setProduct(response.data);
  };

  const deleteProduct = async(id) =>{
    await axios.delete(`http://localhost:5000/users/${id}`);
    getProducts()
  }

  return (
    <div>
        <Link to="/add" className="button is-primary mt-2"> Add New</Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Fullname</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product ) => (
            <tr>
              <td>{product.id} </td>
              <td>{product.email}</td>
              <td>{product.fullname}</td>
              <td>
                <Link to={`/edit/${product.id}`} className="button is-small is-info">Edit</Link>
                <button onClick={()=> deleteProduct(product.id)} className="button is-small is-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
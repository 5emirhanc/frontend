import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const AddProduct = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/products',{
        email:email,
        fullname:fullname
    });
    navigate('/');
    
  }

  return (
    <div>
      <form onSubmit={ saveProduct}>
        <div className="field">
          <label className="label">Title</label>
          <input
            className="input"
            type="text"
            placeholder="Title"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className="field">
          <label className="label">Price</label>
          <input
            className="input"
            type="text"
            placeholder="Price"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          ></input>
        </div>

        <div className="field">
          <button className="button is-primary ">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
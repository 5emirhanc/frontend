import { useState , useEffect } from "react";
import axios from"axios";

export const ProductsList=()=>{
    const [product , setProdut]= useState([]);

    useEffect(()=>{
      getProducts();
    },[]);

    const getProducts = async ()=>{
      const response = await axios.get("http://localhost:5000/")
    }
}
HomePagejs as Cardjs X IS LoginFormjs react-app > sm: > Pages > HomePage > components > Card > >S Cardjs > (3 ProductsList 1 eslint-disable jsx-a11y/alt-text ./ 2 import { useState, useEffect } from "react"; 3 import axios from "axios"; 4 5 export const ProductsList = () .> { 6 const [products, setProduct] = useState([]); 7 8 useEffect(() .> { 9 getProducts(); 10 }, []); 11 12 const getProducts async () => { 13 const response . await axios.get("http://localhost:5000/products/file") 14 setProduct(response.data); 15 1; 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 3 312 
return R <div> <table classmame."table is-striped is-fullwidthl <tbody> {products.map((product) .> ( <tr> <tdxfproductddl </td> <td>{product.fileName}</td> <img src.{productamagePath}Wimg> </tr> ))1 </tbody> </table> </div> 
33 34 export default ProductsList; 
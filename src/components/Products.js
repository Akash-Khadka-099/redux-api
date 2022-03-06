import React, {  useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { setProducts } from "../redux/actions/ActionFactory";

export default function Products() {
  const selector = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const fetchApi = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products`) 
      .catch((err) => {
        console.log("err : ", err);
      });

    dispatch(setProducts(response.data));
  };

  useEffect(() => {  
    fetchApi();
// eslint-disable-next-line
}, []); 

  console.log(selector);

  return <div>Products</div>;
}

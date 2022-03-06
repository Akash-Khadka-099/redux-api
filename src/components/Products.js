import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { setProducts } from "../redux/actions/ActionFactory";

export default function Products() {
  const selector = useSelector((state) => state.allProducts.products);

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

  console.log("select", selector);

  return (
    <>
      {selector &&
        Object.keys(selector).map((item) => {
          const { id, title, price } = selector[item];
          return (
            <div style={{ margin: "10px", backgroundColor: "green" }} key={id}>
              <h1>id {id}</h1>
              <h2>title : {title} </h2>
              <h3>price : ${price}</h3>
            </div>
          );
        })}
    </>
  );
}

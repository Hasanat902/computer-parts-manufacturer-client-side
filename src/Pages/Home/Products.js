import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://sheltered-shelf-74413.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl text-center my-14 text-blue-400 font-bold">
        Our Parts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products
          .slice(-6)
          .map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
      </div>
    </div>
  );
};

export default Products;

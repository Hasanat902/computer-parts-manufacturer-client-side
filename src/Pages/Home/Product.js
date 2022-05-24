import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, description, minOrderQuantity, availableQuantity, price, img } =
    product;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mb-12 mx-5">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-gray-400">{description}</p>
        <p className="font-bold text-gray-400">
          Minimum Order: {minOrderQuantity} pcs
        </p>
        <p className="font-bold text-gray-400">
          Available Quantity: {availableQuantity}
        </p>
        <p className="font-bold text-gray-400">Price: ${price}</p>
        <div className="card-actions justify-center">
          <Link to='/purchase' className="btn btn-primary">Place Order</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;

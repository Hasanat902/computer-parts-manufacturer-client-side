import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const {_id, name, description, minOrderQuantity, availableQuantity, price, img } =
    product;

    const navigate = useNavigate();

    const navigateTo = id => {
        navigate(`/purchase/${id}`);
    }

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
          <button onClick={() => navigateTo(_id)} className="btn btn-primary">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

import React from "react";

const Commitment = ({ commitment }) => {
  const { service, description, image } = commitment;

  return (
    <div className="card card-side bg-gray-300 shadow-xl px-5">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Commitment;

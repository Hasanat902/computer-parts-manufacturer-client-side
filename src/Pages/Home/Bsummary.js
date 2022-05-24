import React from "react";

const Bsummary = ({ summary }) => {
  const { img, number, description } = summary;

  return (
        <div className="card w-96 shadow-xl">
        <figure className="px-10 pt-10">
            <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
            />
        </figure>
        <div className="card-body items-center text-center">
            <p className="text-2xl font-bold">{number}</p>
            <p className="text-xl font-bold text-blue-400">{description}</p>
        </div>
        </div>
  );
};

export default Bsummary;

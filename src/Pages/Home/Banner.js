import React from "react";
import banner1 from "../../images/products/banner1.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner1} className="max-w-lg rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">
            Looking for Computer Parts Manufacturer?
          </h1>
          <p className="py-6">
            From startups to global brands, we supply the world’s best computer
            parts.
            <br />
            So you can doing business with us.
          </p>
          <button className="btn btn-primary">Get a Quote</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from 'react';
import banner2 from '../../images/products/banner2.jpg';

const Capabilities = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
            <img src={banner2} className="max-w-lg rounded-lg shadow-2xl" alt='' />
            <div className='ml-12'>
            <h1 className="text-5xl font-bold">Our Capabilities</h1>
            <p className="py-6">We Are Restocking manufacturer parts as Quickly as Possible. Come Back 7/30 to Order, more of These Flavors Inspired by the Places You Call Home!</p>
            <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
        </div>
    );
};

export default Capabilities;
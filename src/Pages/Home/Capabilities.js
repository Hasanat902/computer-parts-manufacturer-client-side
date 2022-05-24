import React from 'react';
import banner2 from '../../images/products/banner2.jpg';

const Capabilities = () => {
    return (
        <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
            <img src={banner2} class="max-w-lg rounded-lg shadow-2xl" alt='' />
            <div className='ml-12'>
            <h1 class="text-5xl font-bold">Our Capabilities</h1>
            <p class="py-6">We Are Restocking manufacturer parts as Quickly as Possible. Come Back 7/30 to Order, more of These Flavors Inspired by the Places You Call Home!</p>
            <button class="btn btn-primary">Learn More</button>
            </div>
        </div>
        </div>
    );
};

export default Capabilities;
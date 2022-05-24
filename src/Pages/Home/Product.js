import React from 'react';

const Product = ({product}) => {

    const {name, description, minOrderQuantity, availableQuantity, price, img} = product;

    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl mb-12 mx-5">
            <figure><img src={img} alt="" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p className='text-gray-400'>{description}</p>
                <p className='font-bold text-gray-400'>Minimum Order: {minOrderQuantity} pcs</p>
                <p className='font-bold text-gray-400'>Available Quantity: {availableQuantity}</p>
                <p className='font-bold text-gray-400'>Price: ${price}</p>
                <div class="card-actions justify-center">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
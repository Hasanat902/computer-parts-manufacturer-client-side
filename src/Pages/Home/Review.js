import React from 'react';

const Review = ({review}) => {

    const {name, ratings, description} = review;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title font-bold">{name}</h2>
            <h3 className='font-bold text-yellow-400'>Ratings: {ratings}</h3>
            <p className='text-gray-400'>{description}</p>
        </div>
        </div>
    );
};

export default Review;
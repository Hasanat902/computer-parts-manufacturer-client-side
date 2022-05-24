import React from 'react';
import notfound from '../../images/products/not-found.jpg';

const NotFound = () => {
    return (
        <div className='text-center mt-14'>
            <h2 className='text-2xl mb-4 text-red-500'>The page you requested is not found</h2>
            <img className='mx-auto' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;
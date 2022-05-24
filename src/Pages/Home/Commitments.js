import React from 'react';
import delivery from '../../images/icons/delivery.png';
import quality from '../../images/icons/quality.png';
import online from '../../images/icons/online.png';
import Commitment from './Commitment';

const Commitments = () => {

    const commitments = [
        {
            id: 1,
            service: "Free Home Delivery",
            description: "Provide free home delivery for all product over $100",
            image: delivery
        },
        {
            id: 2,
            service: "Quality Products",
            description: "We ensure our product quality all times",
            image: quality
        },
        {
            id: 3,
            service: "Online Support",
            description: "To satisfy our customer we try to give support online",
            image: online
        }
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
               commitments.map(commitment => <Commitment key={commitment.id} commitment={commitment}></Commitment>)
           } 
        </div>
    );
};

export default Commitments;
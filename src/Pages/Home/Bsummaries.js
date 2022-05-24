import React from 'react';
import customer from '../../images/icons/customers.png';
import revenue from '../../images/icons/revenue.png';
import reviews from '../../images/icons/reviews.png';
import Bsummary from './Bsummary';

const Bsummaries = () => {

    const summaries = [
        {
            id: 1,
            img: customer,
            number: "100+",
            description: "Happy Customers"
        },
        {
            id: 2,
            img: revenue,
            number: "150M+",
            description: "Revenues"
        },
        {
            id: 3,
            img: reviews,
            number: "500+",
            description: "Feedbacks"
        }
    ]

    return (
        <div>
            <h2 className='text-3xl text-center mt-14 text-blue-400 font-bold'>So Many Customer Believes Us</h2>
            <p className='text-2xl text-center mb-14 text-gray-500 font-bold'>You can business with us</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    summaries.map(summary => <Bsummary key={summary.id} summary={summary}></Bsummary>)
                }
            </div>
        </div>
    );
};

export default Bsummaries;
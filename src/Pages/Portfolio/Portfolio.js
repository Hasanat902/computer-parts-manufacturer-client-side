import React from 'react';

const Portfolio = () => {
    return (
        <div className='bg-gray-100 rounded p-10'>
            <h2 className='text-center text-3xl font-bold text-success'>Welcome to my portfolio page</h2>
            <p className='text-xl font-bold mt-8'>My name is Md Abul Hasanat</p>
            <p className='mt-5'><span className='font-bold'>Email: </span> abulhasanat902@gmail.com</p>
            <p className='my-5'><span className='font-bold'>Education: </span>B.Sc in Computer Science and Engineering</p>
            
            <h2 className='text-xl font-bold mb-3'>My Skills-</h2>
            <div className='ml-24'>
                <p className='font-bold'>1- HTML5</p>
                <p className='font-bold'>2- CSS3</p>
                <p className='font-bold'>3- Bootstrap</p>
                <p className='font-bold'>4- Tailwind CSS</p>
                <p className='font-bold'>5- Javascript</p>
                <p className='font-bold'>6- React JS</p>
                <p className='font-bold'>7- Node JS</p>
                <p className='font-bold'>8- Express JS</p>
                <p className='font-bold'>9- MongoDB</p>
            </div>
            <h2 className='font-bold my-5'>Some of my project links:</h2>
            <p className='text-blue-400'>1- https://warehouse-management-cli-9103e.web.app/</p>
            <p className='text-blue-400'>2- https://independent-service-prov-5cd6e.web.app/</p>
            <p className='text-blue-400'>3- https://analysis-product-has.netlify.app/</p>

            
        </div>
            
    );
};

export default Portfolio;
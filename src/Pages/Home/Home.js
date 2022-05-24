import React from 'react';
import Banner from './Banner';
import Commitments from './Commitments';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Commitments></Commitments>
            <Products></Products>
        </div>
    );
};

export default Home;
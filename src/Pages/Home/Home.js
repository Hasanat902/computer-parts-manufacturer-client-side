import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Bsummaries from './Bsummaries';
import Capabilities from './Capabilities';
import Commitments from './Commitments';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Commitments></Commitments>
            <Products></Products>
            <Bsummaries></Bsummaries>
            <Capabilities></Capabilities>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
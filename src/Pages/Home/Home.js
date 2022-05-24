import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Bsummaries from './Bsummaries';
import Capabilities from './Capabilities';
import Commitments from './Commitments';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Commitments></Commitments>
            <Products></Products>
            <Bsummaries></Bsummaries>
            <Capabilities></Capabilities>
            <Footer></Footer>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Statistic from '../Statistic/Statistic';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Banner></Banner>
            <Statistic></Statistic>
        </div>
    );
};

export default Home;
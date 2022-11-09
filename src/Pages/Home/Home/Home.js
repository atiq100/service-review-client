import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Statistic from '../Statistic/Statistic';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Link to='/services' className='btn border-0  bg-sky-500/100 grid mt-4 mx-auto w-32'>See more</Link>
            <Banner></Banner>
            <Statistic></Statistic>
        </div>
    );
};

export default Home;
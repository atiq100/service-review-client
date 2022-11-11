import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Statistic from '../Statistic/Statistic';
import HomeService from './HomeService/HomeService';

const Home = () => {
    useTitle("home")
    return (
        <div>
            <Hero></Hero>
            {/* <Services></Services> */}
            <HomeService></HomeService>
            <Link to='/services' className='btn border-0  bg-sky-500/100 grid mt-4 mx-auto w-32 hover:bg-sky-700/100 focus:shadow-outline focus:outline-none'>See more</Link>
            <Banner></Banner>
            <Statistic></Statistic>
        </div>
    );
};

export default Home;
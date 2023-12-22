import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Status from '../Status/Status';
import Products from '../Products/Products';
import Team from '../Team/Team';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Car Doctor | Home</title>
            </Helmet>
            <Banner />
            <div className='mx-2 md:mx-12'>
                <About />
                <Services />
                <Status />
                <Products />
                <Team />
                <Features />
                <Testimonial />
            </div>
        </div>
    );
};

export default Home;
import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Status from '../Status/Status';
import Products from '../Products/Products';
import Team from '../Team/Team';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';
import Service from '../Services/Service';

const Home = () => {
    const [services, setServices] = useState([]);
    const [asc, setAsc] = useState(true);
    const [search, setSearch] = useState('');
    const searchRef = useRef();

    useEffect(() => {
        fetch(`https://car-doctor-server1.vercel.app/services?search=${search}&sort=${asc ? 'asc' : 'dsc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [asc, search]);

    const handleSarch = () => {
        // console.log(searchRef.current.value);
        setSearch(searchRef.current.value);
    }
    return (
        <div>
            <Helmet>
                <title>Car Doctor | Home</title>
            </Helmet>
            <Banner />
            <div className='mx-2 md:mx-12'>
                <About />
                {/* <Services /> */}
                <div>
                    <div className='space-y-2 md:w-3/4 lg:w-1/2 text-center mx-auto p-4 my-4 md:my-8'>
                        <h3 className='text-xl text-red-600 font-bold'>Service</h3>
                        <h1 className='text-4xl text-gray-800 font-bold'>Our Service Area</h1>
                        <p className='text-gray-700 my-6'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <div className="join mr-10">
                            <input ref={searchRef} className="input input-bordered join-item" placeholder="Search" />
                            <div className="indicator">
                                <button onClick={handleSarch} className="btn join-item">Search</button>
                            </div>
                        </div>
                        <button onClick={() => setAsc(!asc)} className='btn btn-primary'>{asc ? 'Price High To Low' : 'Price Low High'}</button>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 md:mb-8'>
                        {
                            services?.map(service => <Service key={service._id} service={service} />)
                        }
                    </div>
                    {/* <div className='text-center mb-4 md:mb-8'>
                <button className="btn btn-outline btn-error">More Services</button>
            </div> */}
                </div>

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
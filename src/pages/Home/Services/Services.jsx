import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='space-y-2 md:w-3/4 lg:w-1/2 text-center mx-auto p-4 my-4 md:my-8'>
                <h3 className='text-xl text-red-600 font-bold'>Service</h3>
                <h1 className='text-4xl text-gray-800 font-bold'>Our Service Area</h1>
                <p className='text-gray-700'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 md:mb-8'>
                {
                    services?.map(service => <Service key={service._id} service={service} />)
                }
            </div>
            <div className='text-center mb-4 md:mb-8'>
                <button className="btn btn-outline btn-error">More Services</button>
            </div>
        </div>
    );
};

export default Services;
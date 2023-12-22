import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, title, img, price } = service;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className="px-10 pt-10"><img className='w-full md:h-80 lg:h-60 rounded-xl' src={img} alt={title} /></figure>
            <div className="px-10 my-4">
                <h2 className="card-title">{title}</h2>
                <div className='flex items-center justify-between'>
                    <p className='text-red-700 font-bold'>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}><FaArrowRight className='text-red-700 font-bold cursor-pointer' /></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
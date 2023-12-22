import React from 'react';
import { FaStar } from 'react-icons/fa';
import img1 from './../../../assets/images/products/1.png'
import img2 from './../../../assets/images/products/2.png'
import img3 from './../../../assets/images/products/3.png'
import img4 from './../../../assets/images/products/4.png'
import img5 from './../../../assets/images/products/5.png'
import img6 from './../../../assets/images/products/6.png'

const Products = () => {
    return (
        <div>
            <div className='space-y-2 md:w-3/4 lg:w-1/2 text-center mx-auto p-4 my-4 md:my-8'>
                <h3 className='text-xl text-red-600 font-bold'>Popular Products</h3>
                <h1 className='text-4xl text-gray-800 font-bold'>Browse Our Products</h1>
                <p className='text-gray-700'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 md:mb-8'>
                <div className="card card-compact bg-base-100 shadow-xl text-center">
                    <figure className="px-10 pt-10"><img className='mx-auto md:h-80 lg:h-60 rounded-xl' src={img6} alt='Image' /></figure>
                    <div className="card-body">
                        <div className='flex justify-center'>
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                        </div>
                        <h2 className="text-xl font-semibold">Car Engine Plug</h2>
                        <p className='text-red-700 font-bold'>Price: $20.00</p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl text-center">
                    <figure><img className='w-3/4 mx-auto md:h-80 lg:h-60' src={img3} alt='Image' /></figure>
                    <div className="card-body">
                        <div className='flex justify-center'>
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                        </div>
                        <h2 className="text-xl font-semibold">Car Air Filter</h2>
                        <p className='text-red-700 font-bold'>Price: $20.00</p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl text-center">
                    <figure><img className='w-3/4 mx-auto md:h-80 lg:h-60' src={img1} alt='Image' /></figure>
                    <div className="card-body">
                        <div className='flex justify-center'>
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                        </div>
                        <h2 className="text-xl font-semibold">Cools Led Light</h2>
                        <p className='text-red-700 font-bold'>Price: $20.00</p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl text-center">
                    <figure><img className='w-3/4 mx-auto md:h-80 lg:h-60' src={img2} alt='Image' /></figure>
                    <div className="card-body">
                        <div className='flex justify-center'>
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                        </div>
                        <h2 className="text-xl font-semibold">Cools Led Light</h2>
                        <p className='text-red-700 font-bold'>Price: $20.00</p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl text-center">
                    <figure><img className='w-3/4 mx-auto md:h-80 lg:h-60' src={img5} alt='Image' /></figure>
                    <div className="card-body">
                        <div className='flex justify-center'>
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                        </div>
                        <h2 className="text-xl font-semibold">Cools Led Light</h2>
                        <p className='text-red-700 font-bold'>Price: $20.00</p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl text-center">
                    <figure><img className='w-3/4 mx-auto md:h-80 lg:h-60' src={img4} alt='Image' /></figure>
                    <div className="card-body">
                        <div className='flex justify-center'>
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                            <FaStar className='w-6 h-6 text-yellow-500' />
                        </div>
                        <h2 className="text-xl font-semibold">Cools Led Light</h2>
                        <p className='text-red-700 font-bold'>Price: $20.00</p>
                    </div>
                </div>
            </div>
            <div className='text-center mb-4 md:mb-8'>
                <button className="btn btn-outline btn-error">More Products</button>
            </div>
        </div>
    );
};

export default Products;
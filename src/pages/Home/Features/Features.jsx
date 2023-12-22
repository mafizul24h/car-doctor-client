import React from 'react';
import icon1 from './../../../assets/icons/check.svg'
import icon2 from './../../../assets/icons/deliveryt.svg'
import icon3 from './../../../assets/icons/group.svg'
import icon4 from './../../../assets/icons/group38729.svg'
import icon5 from './../../../assets/icons/person.svg'
import icon6 from './../../../assets/icons/quote.svg'
import icon7 from './../../../assets/icons/wrench.svg'

const Features = () => {
    return (
        <div className='my-4 md:my-8'>
            <div className='space-y-2 md:w-3/4 lg:w-1/2 text-center mx-auto p-4 my-4 md:my-8'>
                <h3 className='text-xl text-red-600 font-bold'>Core Features</h3>
                <h1 className='text-4xl text-gray-800 font-bold'>Why Choose Us</h1>
                <p className='text-gray-700'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='md:flex gap-8 justify-center'>
                <div className="rounded-md bg-base-100 shadow-xl p-4 hover:bg-orange-300">
                    <img src={icon3} alt="Logo" className="rounded-md  mx-auto" />
                    <div className="items-center text-center">
                        <h2 className="font-bold text-gray-700 ">Expert Team</h2>
                    </div>
                </div>
                <div className="rounded-md  bg-base-100 shadow-xl p-4 hover:bg-orange-300">
                    <img src={icon2} alt="Logo" className="rounded-md mx-auto" />
                    <div className="items-center text-center">
                        <h2 className="font-bold text-gray-700 ">Timely Delivery</h2>
                    </div>
                </div>
                <div className="rounded-md bg-base-100 shadow-xl p-4 hover:bg-orange-300">
                    <img src={icon5} alt="Logo" className="rounded-md mx-auto" />
                    <div className="items-center text-center">
                        <h2 className="font-bold text-gray-700 ">24/7 Support</h2>
                    </div>
                </div>
                <div className="rounded-md bg-base-100 shadow-xl p-4 hover:bg-orange-300">
                    <img src={icon7} alt="Logo" className="rounded-md mx-auto" />
                    <div className="items-center text-center">
                        <h2 className="font-bold text-gray-700 ">Best Equipment</h2>
                    </div>
                </div>
                <div className="rounded-md bg-base-100 shadow-xl p-4 hover:bg-orange-300">
                    <img src={icon1} alt="Logo" className="rounded-md mx-auto" />
                    <div className="items-center text-center">
                        <h2 className="font-bold text-gray-700 ">100% Guranty</h2>
                    </div>
                </div>
                <div className="rounded-md bg-base-100 shadow-xl p-4 hover:bg-orange-300">
                    <img src={icon2} alt="Logo" className="rounded-md mx-auto" />
                    <div className="items-center text-center">
                        <h2 className="font-bold text-gray-700 ">Timely Delivery</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
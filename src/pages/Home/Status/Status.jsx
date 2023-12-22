import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Status = () => {
    return (
        <div className='bg-[#151515] text-white px-6 py-8 md:px-12 md:py-16 md:flex items-center justify-around space-y-4 md:space-y-0 rounded-md'>
            <div className='flex items-center gap-4'>
                <FaCalendarAlt />
                <div>
                    <p><small>We are open monday-friday</small></p>
                    <p className='text-xl font-bold'>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <FaPhoneAlt />
                <div>
                    <p><small>Have a question?</small></p>
                    <p className='text-xl font-bold'>+2546 251 2658</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <FaMapMarkerAlt />
                <div>
                    <p><small>Need a repair? our address</small></p>
                    <p className='text-xl font-bold'>Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default Status;
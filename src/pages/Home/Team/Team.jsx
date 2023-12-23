import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import img1 from './../../../assets/images/team/1.jpg'
import img2 from './../../../assets/images/team/2.jpg'
import img3 from './../../../assets/images/team/3.jpg'
import img4 from './../../../assets/images/team/1.jpg'
import img5 from './../../../assets/images/team/2.jpg'
import img6 from './../../../assets/images/team/3.jpg'
import img7 from './../../../assets/images/team/1.jpg'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Team = () => {
    return (
        <div className='my-4 md:my-8'>
            <div className='space-y-2 md:w-3/4 lg:w-1/2 text-center mx-auto p-4 my-4 md:my-8'>
                <h3 className='text-xl text-red-600 font-bold'>Team</h3>
                <h1 className='text-4xl text-gray-800 font-bold'>Meet Our Team</h1>
                <p className='text-gray-700'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='hidden md:block'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='bg-base-100 shadow-xl p-4 border rounded-lg'>
                            <img className='h-80 rounded-md' src={img1} alt="Image" />
                            <div className='text-center mt-2'>
                                <h3 className='text-xl font-semibold text-gray-800'>Car Engine Plug</h3>
                                <p className='text-gray-800'>Engine Expert</p>
                                <div className='flex justify-center gap-2 mt-2'>
                                    <FaFacebookSquare className='h-6 w-6 text-blue-900' />
                                    <FaTwitterSquare className='h-6 w-6 text-blue-400' />
                                    <FaLinkedin className='h-6 w-6 text-blue-600' />
                                    <FaInstagramSquare className='h-6 w-6 text-pink-600' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-base-100 shadow-xl p-4 border rounded-lg'>
                            <img className='h-80 rounded-md' src={img2} alt="Image" />
                            <div className='text-center mt-2'>
                                <h3 className='text-xl font-semibold text-gray-800'>Car Engine Plug</h3>
                                <p className='text-gray-800'>Engine Expert</p>
                                <div className='flex justify-center gap-2 mt-2'>
                                    <FaFacebookSquare className='h-6 w-6 text-blue-900' />
                                    <FaTwitterSquare className='h-6 w-6 text-blue-400' />
                                    <FaLinkedin className='h-6 w-6 text-blue-600' />
                                    <FaInstagramSquare className='h-6 w-6 text-pink-600' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-base-100 shadow-xl p-4 border rounded-lg'>
                            <img className='h-80 rounded-md' src={img3} alt="Image" />
                            <div className='text-center mt-2'>
                                <h3 className='text-xl font-semibold text-gray-800'>Car Engine Plug</h3>
                                <p className='text-gray-800'>Engine Expert</p>
                                <div className='flex justify-center gap-2 mt-2'>
                                    <FaFacebookSquare className='h-6 w-6 text-blue-900' />
                                    <FaTwitterSquare className='h-6 w-6 text-blue-400' />
                                    <FaLinkedin className='h-6 w-6 text-blue-600' />
                                    <FaInstagramSquare className='h-6 w-6 text-pink-600' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-base-100 shadow-xl p-4 border rounded-lg'>
                            <img className='h-80 rounded-md' src={img4} alt="Image" />
                            <div className='text-center mt-2'>
                                <h3 className='text-xl font-semibold text-gray-800'>Car Engine Plug</h3>
                                <p className='text-gray-800'>Engine Expert</p>
                                <div className='flex justify-center gap-2 mt-2'>
                                    <FaFacebookSquare className='h-6 w-6 text-blue-900' />
                                    <FaTwitterSquare className='h-6 w-6 text-blue-400' />
                                    <FaLinkedin className='h-6 w-6 text-blue-600' />
                                    <FaInstagramSquare className='h-6 w-6 text-pink-600' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-base-100 shadow-xl p-4 border rounded-lg'>
                            <img className='h-80 rounded-md' src={img5} alt="Image" />
                            <div className='text-center mt-2'>
                                <h3 className='text-xl font-semibold text-gray-800'>Car Engine Plug</h3>
                                <p className='text-gray-800'>Engine Expert</p>
                                <div className='flex justify-center gap-2 mt-2'>
                                    <FaFacebookSquare className='h-6 w-6 text-blue-900' />
                                    <FaTwitterSquare className='h-6 w-6 text-blue-400' />
                                    <FaLinkedin className='h-6 w-6 text-blue-600' />
                                    <FaInstagramSquare className='h-6 w-6 text-pink-600' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-base-100 shadow-xl p-4 border rounded-lg'>
                            <img className='h-80 rounded-md' src={img6} alt="Image" />
                            <div className='text-center mt-2'>
                                <h3 className='text-xl font-semibold text-gray-800'>Car Engine Plug</h3>
                                <p className='text-gray-800'>Engine Expert</p>
                                <div className='flex justify-center gap-2 mt-2'>
                                    <FaFacebookSquare className='h-6 w-6 text-blue-900' />
                                    <FaTwitterSquare className='h-6 w-6 text-blue-400' />
                                    <FaLinkedin className='h-6 w-6 text-blue-600' />
                                    <FaInstagramSquare className='h-6 w-6 text-pink-600' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='md:hidden'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='bg-base-100 shadow-xl p-4 border rounded-lg'>
                            <img className='h-80 rounded-md' src={img1} alt="Image" />
                            <div className='text-center mt-2'>
                                <h3 className='text-xl font-semibold text-gray-800'>Car Engine Plug</h3>
                                <p className='text-gray-800'>Engine Expert</p>
                                <div className='flex justify-center gap-2 mt-2'>
                                    <FaFacebookSquare className='h-6 w-6 text-blue-900' />
                                    <FaTwitterSquare className='h-6 w-6 text-blue-400' />
                                    <FaLinkedin className='h-6 w-6 text-blue-600' />
                                    <FaInstagramSquare className='h-6 w-6 text-pink-600' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-base-100 shadow-xl p-4 border rounded-lg'>
                            <img className='h-80 rounded-md' src={img2} alt="Image" />
                            <div className='text-center mt-2'>
                                <h3 className='text-xl font-semibold text-gray-800'>Car Engine Plug</h3>
                                <p className='text-gray-800'>Engine Expert</p>
                                <div className='flex justify-center gap-2 mt-2'>
                                    <FaFacebookSquare className='h-6 w-6 text-blue-900' />
                                    <FaTwitterSquare className='h-6 w-6 text-blue-400' />
                                    <FaLinkedin className='h-6 w-6 text-blue-600' />
                                    <FaInstagramSquare className='h-6 w-6 text-pink-600' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-base-100 shadow-xl p-4 border rounded-lg'>
                            <img className='h-80 rounded-md' src={img3} alt="Image" />
                            <div className='text-center mt-2'>
                                <h3 className='text-xl font-semibold text-gray-800'>Car Engine Plug</h3>
                                <p className='text-gray-800'>Engine Expert</p>
                                <div className='flex justify-center gap-2 mt-2'>
                                    <FaFacebookSquare className='h-6 w-6 text-blue-900' />
                                    <FaTwitterSquare className='h-6 w-6 text-blue-400' />
                                    <FaLinkedin className='h-6 w-6 text-blue-600' />
                                    <FaInstagramSquare className='h-6 w-6 text-pink-600' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-base-100 shadow-xl p-4 border rounded-lg'>
                            <img className='h-80 rounded-md' src={img4} alt="Image" />
                            <div className='text-center mt-2'>
                                <h3 className='text-xl font-semibold text-gray-800'>Car Engine Plug</h3>
                                <p className='text-gray-800'>Engine Expert</p>
                                <div className='flex justify-center gap-2 mt-2'>
                                    <FaFacebookSquare className='h-6 w-6 text-blue-900' />
                                    <FaTwitterSquare className='h-6 w-6 text-blue-400' />
                                    <FaLinkedin className='h-6 w-6 text-blue-600' />
                                    <FaInstagramSquare className='h-6 w-6 text-pink-600' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-base-100 shadow-xl p-4 border rounded-lg'>
                            <img className='h-80 rounded-md' src={img5} alt="Image" />
                            <div className='text-center mt-2'>
                                <h3 className='text-xl font-semibold text-gray-800'>Car Engine Plug</h3>
                                <p className='text-gray-800'>Engine Expert</p>
                                <div className='flex justify-center gap-2 mt-2'>
                                    <FaFacebookSquare className='h-6 w-6 text-blue-900' />
                                    <FaTwitterSquare className='h-6 w-6 text-blue-400' />
                                    <FaLinkedin className='h-6 w-6 text-blue-600' />
                                    <FaInstagramSquare className='h-6 w-6 text-pink-600' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-base-100 shadow-xl p-4 border rounded-lg'>
                            <img className='h-80 rounded-md' src={img6} alt="Image" />
                            <div className='text-center mt-2'>
                                <h3 className='text-xl font-semibold text-gray-800'>Car Engine Plug</h3>
                                <p className='text-gray-800'>Engine Expert</p>
                                <div className='flex justify-center gap-2 mt-2'>
                                    <FaFacebookSquare className='h-6 w-6 text-blue-900' />
                                    <FaTwitterSquare className='h-6 w-6 text-blue-400' />
                                    <FaLinkedin className='h-6 w-6 text-blue-600' />
                                    <FaInstagramSquare className='h-6 w-6 text-pink-600' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Team;
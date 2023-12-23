import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <div className='mb-12'>
            <div className='space-y-2 md:w-3/4 lg:w-1/2 text-center mx-auto p-4 my-4 md:my-8'>
                <h3 className='text-xl text-red-600 font-bold'>Testimonial</h3>
                <h1 className='text-4xl text-gray-800 font-bold'>What Customer Says</h1>
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
                    {testimonials?.map(testimonial => <SwiperSlide key={testimonial._id}>
                        <div className='bg-base-100 md:h-80 shadow-xl p-4 border rounded-lg'>
                            <img className='h-16 w-16 mx-auto rounded-full' src={testimonial.image} alt="Image" />
                            <div className='text-center mt-2'>
                                <h3 className='text-2xl font-semibold text-gray-800'>{testimonial.name}</h3>
                                <h3 className='text-xl font-semibold text-gray-800'>{testimonial.designation}</h3>
                                <p className='text-gray-800'>{testimonial.review}</p>
                                <div className='flex justify-center gap-2 mt-2'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={testimonial.rating}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)

                    }
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
                    {testimonials?.map(testimonial => <SwiperSlide key={testimonial._id}>
                        <div className='bg-base-100 shadow-xl p-4 border rounded-lg'>
                            <img className='h-16 w-16 mx-auto rounded-full' src={testimonial.image} alt="Image" />
                            <div className='text-center mt-2'>
                                <h3 className='text-2xl font-semibold text-gray-800'>{testimonial.name}</h3>
                                <h3 className='text-xl font-semibold text-gray-800'>{testimonial.designation}</h3>
                                <p className='text-gray-800'>{testimonial.review}</p>
                                <div className='flex justify-center gap-2 mt-2'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={testimonial.rating}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)

                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;
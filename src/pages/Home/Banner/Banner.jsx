import React from 'react';
import img1 from './../../../assets/images/banner/1.jpg'
import img2 from './../../../assets/images/banner/2.jpg'
import img3 from './../../../assets/images/banner/3.jpg'
import img4 from './../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[80vh]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute h-full bg-gradient-to-r from-[#151515] to-[rgb(21, 21, 21, 0)] p-6 md:p-12 left-0 right-0  top-0 bottom-0 rounded-xl">
                    <div className='text-white space-y-4 md:w-1/3'>
                        <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn btn-error me-4'>Discover More</button>
                            <button className='btn btn-outline btn-warning'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle me-4">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute h-full bg-gradient-to-r from-[#151515] to-[rgb(21, 21, 21, 0)] p-6 md:p-12 left-0 right-0  top-0 bottom-0 rounded-xl">
                    <div className='text-white space-y-4 md:w-1/3'>
                        <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn btn-error me-4'>Discover More</button>
                            <button className='btn btn-outline btn-warning'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle me-4">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute h-full bg-gradient-to-r from-[#151515] to-[rgb(21, 21, 21, 0)] p-6 md:p-12 left-0 right-0  top-0 bottom-0 rounded-xl">
                    <div className='text-white space-y-4 md:w-1/3'>
                        <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn btn-error me-4'>Discover More</button>
                            <button className='btn btn-outline btn-warning'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle me-2">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute h-full bg-gradient-to-r from-[#151515] to-[rgb(21, 21, 21, 0)] p-6 md:p-12 left-0 right-0  top-0 bottom-0 rounded-xl">
                    <div className='text-white space-y-4 md:w-1/3'>
                        <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn btn-error me-4'>Discover More</button>
                            <button className='btn btn-outline btn-warning'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle me-2">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
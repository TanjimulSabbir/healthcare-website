import React from 'react';
import c1 from '../../Assets/images/slider-1.jpg'
import c2 from '../../Assets/images/slider-4.jpg'
import c3 from '../../Assets/images/slider-2.jpg'
import c4 from '../../Assets/images/slider-3.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full shadow-2xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={c1} className="w-full" alt='' />
                <div className="absolute flex justify-between transform-translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <h2 className='text-7xl font-serif text-black'><p className=''>Trusted Dental</p><p className='mx-6 my-6'>Care Center</p></h2>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={c2} className="w-full" alt='' />
                <div className="absolute flex justify-between transform-translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <h2 className='text-7xl font-serif text-black bg-transparent'><p className=''>Trusted Dental</p><p className='mx-6 my-6'>Care Center</p></h2>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={c3} className="w-full" alt='' />
                <div className="absolute flex justify-between transform-translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <h2 className='text-7xl font-serif text-black'><p className=''>Trusted Dental</p><p className='mx-6 my-6'>Care Center</p></h2>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={c4} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <h2 className='text-7xl font-serif text-black p-6'><p className=''>Trusted Dental</p><p className='mx-6 my-6'>Care Center</p></h2>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>

            </div>
        </div>

    );
};

export default Banner;
import React from 'react';
import c1 from '../../Assets/images/slider-1.jpg'
import c2 from '../../Assets/images/slider-4.jpg'
import c3 from '../../Assets/images/slider-2.jpg'
import c4 from '../../Assets/images/slider-3.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full shadow-2xl">
            <div id="slide1" className="carousel-item relative w-full bg-black">
                <img src="https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" className="w-full" alt='' />
                <div className="absolute flex justify-between transform-translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="">❮</a>
                    <h2 className='text-7xl font-serif'></h2>
                    <a href="#slide2" className="">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1643660527083-5149b75387ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full" alt='' />
                <div className="absolute flex justify-between transform-translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="">❮</a>
                    <h2 className='text-7xl font-serif bg-transparent'></h2>
                    <a href="#slide3" className="">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1642979904720-a552640c2319?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full" alt='' />
                <div className="absolute flex justify-between transform-translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="">❮</a>
                    <h2 className='text-7xl font-serif'></h2>
                    <a href="#slide4" className="">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1606811842243-af7e16970c1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="">❮</a>
                    <h2 className='text-7xl font-serif p-6'></h2>
                    <a href="#slide1" className="">❯</a>
                </div>

            </div>
        </div>

    );
};

export default Banner;
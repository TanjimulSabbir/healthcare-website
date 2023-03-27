import React from 'react';
import c1 from '../../Assets/images/slider-1.jpg'
import c2 from '../../Assets/images/slider-4.jpg'
import c3 from '../../Assets/images/slider-2.jpg'
import c4 from '../../Assets/images/slider-3.jpg'

const Banner = () => {
    return (
        <div className='relative'>
            <div className="relative carousel w-full h-full max-h-screen">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://images.pexels.com/photos/4069882/pexels-photo-4069882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />


                </div>

                <div id="item3" className="carousel-item w-full">
                    <img src="https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" className="w-full" />
                </div>

            </div>
            <div className="absolute bottom-2 bg-transparent flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>

                <a href="#item3" className="btn btn-xs">2</a>
            </div>
        </div>


    );
};

export default Banner;
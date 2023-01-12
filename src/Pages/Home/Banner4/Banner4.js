import React from 'react';
import Cards from './Cards';

const Banner4 = () => {
    return (
        <div className='bg-blue-800 py-20'>
            <div className='space-y-10 text-center mb-24'>
                <h3 className='text-violet-300 text-xl'>Popular Dental Sevices</h3>
                <h1 className='text-violet-300 font-serif text-4xl md:text-5xl lg:w-1/2 mx-auto'><p className='my-3'>Benefit Of Physical Mental and</p> Virtual Care</h1>
            </div>
            <Cards></Cards>
        </div>
    );
};

export default Banner4;
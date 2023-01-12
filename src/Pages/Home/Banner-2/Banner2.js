import React from 'react';
import B2Cards from './B2Cards';


const Banner2 = () => {
    return (
        <div className='px-12 py-24 bg-gray-200 shadow-2xl'>
            <div className='space-y-6 mb-12'>
                <p className='text-2xl text-blue-500'>Why Choose Our Medical</p>
                <p className='text-4xl text-black md:text-5xl'><p className='mb-5'>Breakthrough in Comprehensive,</p> Flexible Care Models</p>
            </div>
            <B2Cards />
        </div>

    );
};

export default Banner2;
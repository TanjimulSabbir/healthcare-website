import React from 'react';
import B2Cards from './B2Cards';


const Banner2 = () => {
    return (
        <div className='px-12 py-24 bg-green-50 shadow-2xl'>
            <div className='space-y-6 mb-12'>
                <p className='text-3xl text-blue-500'>Why Choose Our Medical</p>
                <p className='text-lg text-black md:text-xl'>
                    Breakthrough in Comprehensive, Flexible Care Models</p>
            </div>
            <B2Cards />
        </div>

    );
};

export default Banner2;
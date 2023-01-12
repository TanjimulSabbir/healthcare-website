import React from 'react';
import ServicesCards from './ServicesCards';

const Services = () => {
    return (
        <div className='bg-gray-100 py-16 px-6'>
            <div className='space-y-6 mb-12 mx-auto text-center'>
                <p className='text-3xl text-blue-500'>Services At Our Clinic</p>
                <p className='text-4xl text-black md:text-5xl px-4'>
                    Our clinic offers all kinds of services and
                    constantly study new technology to add new custom services to the list</p>
            </div>
            <ServicesCards></ServicesCards>
        </div>
    );
};

export default Services;
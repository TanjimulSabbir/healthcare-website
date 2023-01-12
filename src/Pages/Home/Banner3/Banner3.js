import React from 'react';
import imageB3 from '../../../Assets/images/banner-home-3.png'
import Card from './Card';

const Banner3 = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl bg-slate-100 pt-16 lg:px-8">
            <figure className='flex flex-col'>
                <img className='w-full' src={imageB3} alt="Album" />
                <p className='w-full bg-blue-900 h-8 lg:hidden'></p>
            </figure>
            <div className='lg:ml-20 px-8 pb-14 lg:px-0'>
                <Card></Card>
            </div>
        </div>
    );
};

export default Banner3;
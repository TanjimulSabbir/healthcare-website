import React from 'react';

const Card = ({ info }) => {
    const { title, description, icon, position } = info
    return (
        <div className={`md:w-96 lg:w-80 py-12 lg:h-auto px-6 mx-auto space-y-3 mt-10 border bg-white shadow lg:absolute lg:pb-10 ${position}`}>
            <img className='w-16 mx-auto pt-2' src={icon} alt="" srcset="" />
            <h1 className='text-2xl my-2 text-center text-black'>{title}</h1>
            <p className='text-gray-800 text-lg'>{description}</p>
        </div>
    );
};

export default Card;
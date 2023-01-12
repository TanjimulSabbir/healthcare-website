import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import image1 from '../../Assets/images/service1.jpg'
import image2 from '../../Assets/images/service2.jpg'
import image3 from '../../Assets/images/service3.jpg'
import image4 from '../../Assets/images/service4.jpg'
import image5 from '../../Assets/images/service5.jpg'
import image6 from '../../Assets/images/service6.jpg'

const ServiceDetails = () => {
    const cardInfo = [
        { _id: "1", title: "Cosmetic Dentistry", description: "Cosmetic dentistry mainly concerns improving the appearance of your … See your dentist every six months.", icon: image1 },
        { _id: "2", title: "Pediatric Dentistry", description: "Pediatric dentistry is tailored to ensure infants, children, and ….Your teeth and smile are not only an important part of your overall health, but they can also help you feel confident.", icon: image2 },
        { _id: "3", title: "Dental Implants", description: "The popularity of cosmetic dentistry continues to increase as many people try to take advantage of various products.", icon: image3 },
        { _id: "4", title: "Pediatric Therapy", description: "Periodontal therapy is technically all about restoring the diseased.The popularity of cosmetic dentistry continues to increase as many people try to take advantage of various products.", icon: image4 },
        { _id: "5", title: "Theeth Whitening", description: "Our dentists will clean up your teeth, conduct a thorough check ….The popularity of cosmetic dentistry continues to increase as many people try to take advantage of various products.", icon: image5 },
        { _id: "6", title: "Preventive Dentistry", description: "The popularity of cosmetic dentistry continues to increase as many people try to take advantage of various products.", icon: image6 },
    ];
    const params = useParams();
    console.log(params)
    let match = cardInfo.find((card => card._id === params._id));
    const { title, description, icon } = match;
    return (
        <div className='bg-white py-14'>
            <div className='pt-8 pb-8 space-y-8 relative text-center lg:w-1/2 mx-auto border rounded-lg bg-gray-100 shadow-lg'>
                <img className='rounded w-1/2 px-5 mx-auto' src={icon} alt="" srcset="" />
                <h1 className='text-2xl my-5 font-bold text-blue-500 px-5'>{title}</h1>
                <p className='text-black text-lg px-5'>{description}</p>
                <div className='mx-auto flex justify-around pt-10'>
                    <Link className='btn bg-success rounded-l-lg text-white border-none w-1/4' to={`/`}>Home</Link>
                    <Link className='btn bg-pink-500 rounded-l-lg text-white border-none w-1/4' to={`/services`}>Back</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
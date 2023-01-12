import React from 'react';
import image1 from '../../Assets/images/service1.jpg'
import image2 from '../../Assets/images/service2.jpg'
import image3 from '../../Assets/images/service3.jpg'
import image4 from '../../Assets/images/service4.jpg'
import image5 from '../../Assets/images/service5.jpg'
import image6 from '../../Assets/images/service6.jpg'
import { Link } from 'react-router-dom';

const ServicesCards = () => {
    const cardInfo = [
        { _id: "1", title: "Cosmetic Dentistry", description: "Cosmetic dentistry mainly concerns improving the appearance of your … See your dentist every six months.", icon: image1 },
        { _id: "2", title: "Pediatric Dentistry", description: "Pediatric dentistry is tailored to ensure infants, children, and ….Your teeth and smile are not only an important part of your overall health, but they can also help you feel confident.", icon: image2 },
        { _id: "3", title: "Dental Implants", description: "The popularity of cosmetic dentistry continues to increase as many people try to take advantage of various products.", icon: image3 },
        { _id: "4", title: "Pediatric Therapy", description: "Periodontal therapy is technically all about restoring the diseased.The popularity of cosmetic dentistry continues to increase as many people try to take advantage of various products.", icon: image4 },
        { _id: "5", title: "Theeth Whitening", description: "Our dentists will clean up your teeth, conduct a thorough check ….The popularity of cosmetic dentistry continues to increase as many people try to take advantage of various products.", icon: image5 },
        { _id: "6", title: "Preventive Dentistry", description: "The popularity of cosmetic dentistry continues to increase as many people try to take advantage of various products.", icon: image6 },
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-12'>
            {
                cardInfo.map(info => {
                    const { _id, title, description, icon } = info;
                    console.log(info)
                    return <div className='card border pt-8 pb-20  shadow-lg space-y-8 relative'>
                        <img className='rounded px-5' src={icon} alt="" srcset="" />
                        <h1 className='text-2xl my-5 font-bold text-blue-500 px-5'>{title}</h1>
                        <p className='text-black text-lg px-5'>{description}</p>
                        <Link className='btn bg-pink-500  text-white border-none absolute bottom-0 w-full' to={`/services/${_id}`}>Learn More</Link>
                    </div>
                })
            }
        </div>
    );
};

export default ServicesCards;
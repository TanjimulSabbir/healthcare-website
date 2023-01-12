import React from 'react';
import img1 from '../../Assets/images/contact-1.jpg'
import img2 from '../../Assets/images/contact-2.jpg'
import img3 from '../../Assets/images/contact-3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactCard, faLocation, faMask, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    const cardInfo = [
        { _id: "1", title: "New York Office", place: "2005 Stokes Isle Apt. 896, Venaville 10010, United State", email: "info@yourdomain.com", phone: "(+68) 120034509", img: img1 },
        { _id: "1", title: "New Jersey Office", place: "2005 Stokes Isle Apt. 896, Venaville 10010, United State", email: "info@yourdomain.com", phone: "(+68) 120034509", img: img2 },
        { _id: "1", title: "New York Office", place: "2005 Stokes Isle Apt. 896, Venaville 10010, United State", email: "info@yourdomain.com", phone: "(+68) 120034509", img: img3 },

    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-12 bg-white shadow-lg py-20 px-4 lg:px-10'>
            {
                cardInfo.map(info => {
                    const { _id, title, place, email, phone, img } = info;
                    console.log(info)
                    return <div className='card border pt-8 pb-20  shadow-lg space-y-5 relative'>
                        <img className='rounded-lg px-5' src={img} alt="" srcset="" />
                        <h1 className='text-2xl my-5 font-bold text-blue-500 px-5'>{title}</h1>
                        <p className='text-black text-lg px-5 flex items-center space-x-3'><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon> <span>{place}</span></p>
                        <p className='text-lg text-black px-5 flex items-center space-x-3'><FontAwesomeIcon icon={faContactCard}></FontAwesomeIcon> <span>{email}</span></p>
                        <p className='text-lg text-black px-5 flex items-center space-x-3'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon><span> {phone}</span></p>
                    </div>
                })
            }
        </div>
    );
};

export default Contact;
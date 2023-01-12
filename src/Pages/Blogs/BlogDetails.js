import React from 'react';
import img1 from '../.././Assets/images/blogs-1.jpg'
import img2 from '../.././Assets/images/blogs-2.jpg'
import img3 from '../.././Assets/images/blogs-3.jpg'
import img4 from '../.././Assets/images/blogs-4.jpg'
import img5 from '../.././Assets/images/blogs-5.jpg'
import img6 from '../.././Assets/images/blogs-6.jpg'
import img7 from '../.././Assets/images/blogs-7.jpg'
import img8 from '../.././Assets/images/blogs-8.jpg'
import facebook from "../.././Assets/Icon/facebook.svg"
import google from "../.././Assets/Icon/google.svg"
import github from "../.././Assets/Icon/githubi.svg"
import gmail from "../.././Assets/Icon/gmail.svg"
import twitter from "../.././Assets/Icon/twitter.svg"
import Tanjim from '../../Assets/Blogs-writer/Tanjim.jpg'

import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';

const BlogDetails = () => {
    const cardInfo = [
        { _id: "1", title: "Top 5 Foods That Can Whiten Your Teeth Effectively", date: "12 January,  2023", img: img1 },
        { _id: "2", title: "The Dangers Of Bleachorexia That You Should Know", date: "12 January, 2023", img: img2 },
        { _id: "3", title: "What Does it Mean When Your Tongue Turns White?", date: "12 January, 2023", img: img3 },
        { _id: "4", title: "What Type of Mouth-guard Should You Use Every Day?", date: "12 January, 2023", img: img4 },
        { _id: "5", title: "Is Having a Gum Lift Really Necessary for Your Oral Health?", date: "12 January, 2023", img: img5 },
        { _id: "6", title: "Surprising Foods that are Actually Good for Your Teeth", date: "12 January, 2023", img: img6 },
        { _id: "7", title: "Little-Known Services that Your Dentists are Providing", date: "12 January, 2023", img: img7 },
        { _id: "8", title: "Getting to Know A New Service Called Holistic Dentistry", date: "12 January, 2023", img: img8 },
    ]
    const params = useParams();
    const matches = cardInfo.find(card => card._id === params._id);
    const { title, img } = matches

    return (
        <div className='px-10 space-y-10 bg-blue-200 py-20 lg:pb-28 shadow-xl'>
            <img className='mx-auto' src={img} alt="" srcset="" />
            <h1 className='text-3xl text-center text-teal-500'>{title}</h1>
            <div className='text-lg text-black space-y-4'><p>Strawberry: They may stain your shirt, but they could work to whiten teeth, since they contain an enzyme called malic acid. Try mashing up strawberries and rubbing them on your teeth. Leave for five minutes then rinse with water and brush and floss as usual.</p>

                <p>  Apple, Celery & Carrot: These healthy fruits and veggies act like natural stain removers by increasing saliva production, which serves as the mouth’s self-cleaning agent. They also may kill bacteria that causes bad breath, and their crunch factor works to scrub teeth clean.</p>

                <p> “ One 2008 study found toothpastes that contain baking soda — long considered a tooth-whitening home remedy — do a better job of removing plaque than toothpastes without the ingredient.”</p>

                Orange & Pineapple: Eating tart fruits such as oranges and pineapples may cause the mouth to produce more saliva, which washes teeth clean naturally. Beware of using lemons directly on teeth, because too much acidity can damage teeth.

                Source: www.aarp.org</div>
            <div className='flex items-center space-x-4 mb-20'>
                <p className='text-xl text-black cursor-pointer'><FontAwesomeIcon icon={faTags}></FontAwesomeIcon> Tags: Clinic, dental, dentistry, teeth</p>
                <div className='w-10 flex items-center'>
                    <img className='ml-4 cursor-pointer boreder' src={facebook} alt="" srcset="" />
                    <img className='ml-4 cursor-pointer boreder' src={github} alt="" srcset="" />
                    <img className='ml-4 cursor-pointer boreder' src={twitter} alt="" srcset="" />
                    <img className='ml-4 cursor-pointer boreder' src={google} alt="" srcset="" />
                    <img className='ml-4 cursor-pointer boreder' src={gmail} alt="" srcset="" />
                </div>
            </div>
            <div className='bg-gray-100 flex flex-col lg:flex-row items-center shadow-xl px-2 py-10 lg:p-8 lg:w-3/4 lg:space-x-10'>
                <div className='lg:w-4/12 rounded-full px-6 lg:px-0'><img className='rounded-full' src={Tanjim} alt="" srcset="" /></div>
                <div className='lg:w-8/12 px-2 lg:px-0'>
                    <h3 className='text-2xl font-normal text-black py-5 lg:pb-5 '>Tanjimul Islam Sabbir</h3>
                    <p className='text-base pb-4 text-gray-900'>Hi! I'm Tanjimul. Are you in search of medical and health-related content? This the best place for you. My name is Tanjimul Islam Sabbir and I will provide you with excellent articles and blog posts using my ability to both simplify complex concepts for the general audience and add a scientific element to health-related topics.
                        I can write articles or blog posts on any medical topic (health, fitness, bodybuilding, nutrition, weight loss, cardiology, infectious diseases, genetics, pediatrics, neurology, obstetrics, exercises among others)I offer high quality, precise, and professional works that are also based on scientific evidence.
                        Please, contact me before ordering the project catalog for disponibility and to know your requirements.</p>
                    <div className='flex item-center text-black'>
                        <img className='w-4 ml-0 cursor-pointer' src={facebook} alt="" srcset="" />
                        <img className='w-4 ml-4 cursor-pointer' src={twitter} alt="" srcset="" />
                        <img className='w-4 ml-4 cursor-pointer' src={gmail} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
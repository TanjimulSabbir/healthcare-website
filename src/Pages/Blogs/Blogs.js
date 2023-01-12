import React from 'react';
import img1 from '../../Assets/images/blogs-1.jpg'
import img2 from '../../Assets/images/blogs-2.jpg'
import img3 from '../../Assets/images/blogs-3.jpg'
import img4 from '../../Assets/images/blogs-4.jpg'
import img5 from '../../Assets/images/blogs-5.jpg'
import img6 from '../../Assets/images/blogs-6.jpg'
import img7 from '../../Assets/images/blogs-7.jpg'
import img8 from '../../Assets/images/blogs-8.jpg'
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
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

    const navigate = useNavigate();
    const handleBlog = (_id) => {
        return navigate(`/blogs/${_id}`)
    }
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-12 bg-white shadow-lg py-20 px-4 lg:px-10 cursor-pointer'>
                {
                    cardInfo.map(blog => {
                        const { _id, title, date, img } = blog;
                        return <div onClick={() => handleBlog(_id)} className='card border pt-8 pb-20  shadow-lg space-y-5 relative'>
                            <img className='rounded-lg px-5' src={img} alt="" srcset="" />
                            <h1 className='text-2xl my-5 font-bold text-blue-500 px-5'>{title}</h1>
                            <p className='text-black text-lg px-5 flex items-center space-x-3'>{date}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Blogs;
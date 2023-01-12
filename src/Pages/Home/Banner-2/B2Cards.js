import React from 'react';
import teeth1 from '../../../Assets/images/tooth.png'
import teeth2 from '../../../Assets/images/tooth-2.png'
import teeth3 from '../../../Assets/images/tooth-3.png'

const B2Cards = () => {
    const cardInfo = [
        { _id: "1", title: "Tooth Protection", description: "To prevent enamel loss and keep teeth healthy, be sure to brush and floss teeth daily. See your dentist every six months.", icon: teeth1 },
        { _id: "1", title: "Teeth Whiteing", description: "Your teeth and smile are not only an important part of your overall health, but they can also help you feel confident.", icon: teeth2 },
        { _id: "1", title: "Cosmetic Dentistry", description: "The popularity of cosmetic dentistry continues to increase as many people try to take advantage of various products.", icon: teeth3 },
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-12'>
            {
                cardInfo.map(info => {
                    const { title, description, icon } = info;
                    console.log(info)
                    return <div className='card border py-10 px-5 shadow'>
                        <img className='w-16' src={icon} alt="" srcset="" />
                        <h1 className='text-2xl my-5 text-black'>{title}</h1>
                        <p className='text-gray-800 text-lg'>{description}</p>
                    </div>
                })
            }
        </div>
    );
};

export default B2Cards;
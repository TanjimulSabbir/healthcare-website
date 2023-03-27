import React from 'react';
import icon3 from '../../../Assets/images/banner4Icon1.png'
import icon1 from '../../../Assets/images/banner4Icon2.png'
import icon2 from '../../../Assets/images/banner4Icon3.png'
import icon4 from '../../../Assets/images/Banner4Icon4.png'
import icon5 from '../../../Assets/images/banner4Icon5.png'
import Card from './Card';

const Cards = () => {
    const Banner4Cards = [
        { _id: 1, title: "Tooth Fitting", description: "To prevent enamel loss and keep teeth healthy, be sure to brush and floss teeth daily. See your dentist every six months.", icon: icon1, position: "lg:top-0 lg:left-24" },
        { _id: 2, title: "Orthodontics", description: "Permanent Solution for Missing Teeth.Your teeth and smile are not only an important part of your overall health, but they can also help you feel confident.", icon: icon2, position: "lg:top-0 lg:right-24" },
        { _id: 3, title: "Endodontics Services", description: "Orthodontic treatment creates a better bite.Your teeth and smile are not only an important part of your overall health, but they can also help you feel confident.", icon: icon4, position: "lg:bottom-10 lg:left-4" },
        { _id: 4, title: "Tooth Extractions", description: "There are some important steps to follow..A root canal is one of the most common dental..Your teeth and smile are not only an important part of your overall health, but they can also help you feel confident.", icon: icon5, position: "lg:bottom-0 lg:right-4" },
    ]
    return (
        <div className='lg:relative lg:pb-60 px-10 lg:px-0 '>
            <img className='mx-auto lg:mb-0' src={icon3} alt="" />
            <div className=''>
                {
                    Banner4Cards.map(info => {
                        return <Card key={info._id} info={info}></Card>
                    })
                }
            </div>
        </div>
    );
};

export default Cards;
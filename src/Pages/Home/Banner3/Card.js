import React from 'react';

const Card = () => {
    return (
        <div className='space-y-5 pt-12'>
            <h3 className='text-xl text-blue-500'>About Jarred M. Castaneda</h3>
            <h1 className='text-3xl font-serif text-black '>Hello This Is Jarred M. Castaneda</h1>
            <h5 className='text-violet-500 text-xl'>25 Years Of Experience in Medical Services</h5>
            <p className='text-lg text-gray-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum impedit nostrum ab et illum nihil blanditiis dignissimos, velit ea id soluta corporis nam eaque, iure tenetur exercitationem rem, in dolor? Culpa ipsa saepe, eveniet ratione hic molestias adipisci vero velit obcaecati omnis deleniti! Ratione at aspernatur quia enim quae temporibus!</p>
            <div className='pt-12'>
                <button className='btn bg-blue-500 rounded-3xl text-white px-10 hover:bg-violet-500 border-none'> Learn More Us</button>
            </div>
        </div>
    );
};

export default Card;
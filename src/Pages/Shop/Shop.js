import React, { useState } from 'react';
import p1 from '../../Assets/products/product-1.jpg'
import p2 from '../../Assets/products/product-2.jpg'
import p3 from '../../Assets/products/product-3.jpg'
import p4 from '../../Assets/products/product-4.jpg'
import p5 from '../../Assets/products/product-5.jpg'
import p6 from '../../Assets/products/product-6.jpg'
import p7 from '../../Assets/products/product-7.jpg'
import p8 from '../../Assets/products/product-8.jpg'
import p9 from '../../Assets/products/product-9.jpg'
import p10 from '../../Assets/products/product-10.jpg'
import p11 from '../../Assets/products/product-11.jpg'
import p12 from '../../Assets/products/product-12.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import UseCart from '../../UseHook/UseCart';

const Shop = () => {
    const { cart, ShopAddToCard } = UseCart();

    const products = [
        { _id: "1", name: " 1-on-1 Set", price: "$20.00", type: "Hot", img: p1 },
        { _id: "3", name: "Couple Kit ", price: "$16.00", type: "stock out", img: p11 },
        { _id: "4", name: "E-Brush 01 ", price: "$18.00", type: "sale", img: p3 },
        { _id: "5", name: "E-Brush 02 ", price: "$18.00", type: "Sale", img: p4 },
        { _id: "6", name: "E-Brush 05 ", price: "$55.00", type: "Hot", img: p5 },
        { _id: "7", name: "Hygiene Set ", price: "$25.00", type: "Hot", img: p6 },
        { _id: "8", name: "Kid E-brush ", price: "$2.00", type: "Sale", img: p7 },
        { _id: "9", name: "Lab tools", price: " $11.05", type: "", img: p8 },
        { _id: "10", name: "Super Slim Brush ", price: "$45.00", type: "Hot", img: p9 },
        { _id: "11", name: "Travel Kit ", price: "$15.00", type: "sale", img: p10 },
        { _id: "12", name: "Water Pulse ", price: "$18.00", type: "Hot and sale", img: p2 },
    ]

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-12 bg-white shadow-lg py-20 px-4 lg:px-10'>

            {
                products.map(product => {
                    const { name, price, type, img } = product;
                    console.log(product)
                    return <div className='card border pt-2 pb-10 shadow-lg relative'>
                        <img className='rounded-lg px-5' src={img} alt="" srcset="" />
                        <div className='flex flex-col'>
                            <h1 className='text-xl py-3 font-mono text-blue-500 px-5 text-center'>{name}</h1>
                            <p className='text-lg pb-5 flex items-center justify-center text-violet-500 font-serif'> <span>{price}</span></p>
                        </div>
                        <p className='text-lg text-black px-5 flex items-center space-x-3 absolute top-5 uppercase left-4 bg-red-600 p-1 rounded'><span>{type}</span></p>
                        <button onClick={() => ShopAddToCard()} className='bg-purple-800 p-3 rounded-b absolute bottom-0 w-full'>
                            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> Add to Card  {cart}</button>
                    </div>
                })
            }
        </div>
    );
};

export default Shop;
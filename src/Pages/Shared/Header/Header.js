import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Avator from './Avator';
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    const getCart = localStorage.getItem("cart");
    console.log(getCart, "Header")
    const menuItems = <>
        <li><NavLink className='text-white md:text-black font-serif' to="/">Home</NavLink></li>
        <li><NavLink className='text-white md:text-black font-serif' to="/appoinment">Appoinment</NavLink></li>
        <li><NavLink className='text-white md:text-black font-serif' to="/services">Services</NavLink></li>
        <li><NavLink className='text-white md:text-black font-serif' to="/shop">Shop</NavLink></li>
        <li><NavLink className='text-white md:text-black font-serif' to="/blogs">Blogs</NavLink></li>
        <li>
            {
                user ? <NavLink className='text-white md:text-black  font-serif' to="/login" onClick={() => {
                    const isLogOut = window.confirm("Do you want to Log-out");
                    if (isLogOut) {
                        return logout()
                    }
                }}>LogOut</NavLink> : <NavLink className='text-white md:text-black ' to="/login">Login</NavLink>
            }

        </li>
        <li>
            <NavLink className='text-white md:text-black  font-serif' to="/contact">Contact Us</NavLink></li>
        <Avator>

        </Avator>

    </>

    return (
        <div className="navbar bg-white shadow-lg lg:flex lg:justify-between lg:pl-8">
            <div className="navbar-star">
                <div className="dropdown relative">
                    <label tabIndex={0} className="btn btn-success text-white lg:hidden">
                        <AiOutlineMenu className='text-xl' />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact -ml-2 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className='flex items-center justify-center space-x-2 absolute top-1 right-4 lg:top-auto lg:right-auto'>
                    <li className='list-none font-bold uppercase'><span className='btn text-green-500'>DentalCare</span></li>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Header;
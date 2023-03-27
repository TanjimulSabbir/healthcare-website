import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../Assets/images/tooth-3.png'
import auth from '../../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Avator from './Avator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    const getCart = localStorage.getItem("cart");
    console.log(getCart, "Header")
    const menuItems = <>
        <li><NavLink className='text-black font-serif' to="/">Home</NavLink></li>
        <li><NavLink className='text-black font-serif' to="/appoinment">Appoinment</NavLink></li>
        <li><NavLink className='text-black font-serif' to="/services">Services</NavLink></li>
        <li><NavLink className='text-black font-serif' to="/shop">Shop</NavLink></li>
        <li><NavLink className='text-black font-serif' to="/blogs">Blogs</NavLink></li>
        <li>
            {
                user ? <NavLink className='text-black font-serif' to="/login" onClick={() => {
                    const isLogOut = window.confirm("Do you want to Log-out");
                    if (isLogOut) {
                        return logout()
                    }
                }}>LogOut</NavLink> : <NavLink className='text-black' to="/login">Login</NavLink>
            }

        </li>
        <li><NavLink className='text-black font-serif' to="/contact">Contact Us</NavLink></li>
        <Avator></Avator>
        <li className='flex justify-center items-center relative'><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> <span className='absolute -top-2 right-0 rounded-full p-1 bg-violet-600'>{getCart}</span></li>
    </>

    return (
        <div className="navbar bg-white shadow-lg lg:flex lg:justify-between lg:pl-8">
            <div className="navbar-star">
                <div className="dropdown relative">
                    <label tabIndex={0} className="btn btn-info text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className='flex items-center justify-center space-x-2 absolute top-1 right-4 lg:top-auto lg:right-auto'>
                    <img className='w-14 rounded-full bg-white' src={logo} alt="BrandLogo" srcset="" />
                    <li className='list-none font-bold uppercase'><span className='text-red-500'>Medicore</span><span className='text-violet-600'></span> <br /> <span className='text-green-800'>DentalCare</span></li>
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
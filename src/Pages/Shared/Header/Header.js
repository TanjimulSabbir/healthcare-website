import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../Assets/images/dentalBrandLogo.jpg'
import auth from '../../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Avator from './Avator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarTunnel, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Home from '../../Home/Home';
import Login from '../../Login/Login';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    const navigate = useNavigate();
    const getCart = localStorage.getItem("cart");
    console.log(getCart, "Header")
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appoinment">Appoinment</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li>
            {
                user ? <Link to="/login" onClick={() => {
                    const isLogOut = window.confirm("Do you want to LogOut");
                    if (isLogOut) {
                        return logout()
                    }
                }}>LogOut</Link> : <Link to="/login">Login</Link>
            }

        </li>
        <li><Link to="/contact">Contact Us</Link></li>
        <Avator></Avator>
        <li className='flex justify-center items-center relative'><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> <span className='absolute -top-2 right-0 rounded-full p-1 bg-violet-600'>{getCart}</span></li>
    </>

    return (
        <div className="navbar bg-black lg:flex lg:justify-between lg:pl-8">
            <div className="navbar-star">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className='flex items-center space-x-2'>
                    <img className='w-14 rounded-full' src={logo} alt="BrandLogo" srcset="" />
                    <li className='list-none font-bold uppercase'><span className='text-cyan-600'>Medicore</span><span className='text-blue-400'></span> <br /> <span className='text-green-700'>DentalCare</span></li>
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
import React, { useState } from 'react';
import auth from '../../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Avator = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            <div className="dropdown dropdown-end bg-black">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={user && user?.photoURL} alt='' />
                        <p className='lg:hidden text-white bg-red'>{(user && user?.displayName) || "No User"}</p>
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content rounded-box w-52 hidden lg:block bg-black">
                    <li>
                        <a>
                            <p>{user ? user?.displayName : "No User"}</p>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li>   {
                        user ? <Link onClick={() => {
                            const isLogOut = window.confirm("Do you want to LogOut");
                            if (isLogOut) {
                                logout()
                                return navigate("/login")
                            }
                        }} to="/login">LogOut</Link> : <Link to="/login">Login{user?.displayName}</Link>
                    }

                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Avator;
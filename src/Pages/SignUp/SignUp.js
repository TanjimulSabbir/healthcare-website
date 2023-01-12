import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginWithSocial from '../Login/LoginWithSocial';
import auth from '../../Firebase/Firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const number = e.target.tel.value;
        const userName = e.target.name.value;
        if (email && (password.length >= 6) && number && userName) {
            createUserWithEmailAndPassword(email, password)
        }
        else {
            return alert("provide valid input")
        }
        e.target.reset()
    };

    if (user) {
        return <div className="toast toast-center toast-middle">
            <div className="alert alert-info">
                Sign Up Success
            </div>

        </div>
    }

    return (
        <div className='bg-white px-4 py-10 lg:px-0 relative'>
            <div className='lg:w-1/2 lg:mx-auto'>
                <div className='bg-gray-50 py-6 lg:p-10 shadow-lg border rounded border-black'>
                    <h2 className='text-4xl text-center font-mono text-black'>Create an Account</h2>
                    <form className='flex flex-col items-center space-y-6 text-black px-10 lg:px-0 pt-12' onSubmit={handleSubmit}>
                        <input type="name" className='input input-bordered w-full bg-white border-black' name='name' placeholder="Your Full Name" />
                        <input type="email" className='input input-bordered w-full bg-white border-black' name='email' placeholder="Email Address" />
                        <input type="tel" className='input w-full bg-white border-black' name='tel' placeholder="Cell Phone Number" />
                        <input type="password" className='input w-full bg-white border-black' name='password' placeholder="Password" />

                        <button className='btn btn-primary w-full' type='submit'>Sign Up</button>
                    </form>
                    <p className='text-black text-center pt-4'>Already have an Account? <Link to="/login" className='link-primary'>Login</Link></p>
                </div>
                <div className="divider my-10 text-black">OR</div>
                <LoginWithSocial></LoginWithSocial>
            </div>
        </div>
    );
};

export default SignUp;
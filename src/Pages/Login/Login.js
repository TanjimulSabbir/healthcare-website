import React from 'react';
import Form from '../Appoinment/Form';
import LoginForm from './LoginForm';
import LoginWithSocial from './LoginWithSocial';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-gray-100'>
            <div className="flex flex-col w-full py-14 px-4 lg:px-0 lg:w-1/2 lg:mx-auto">
                <div className='lg:px-0 space-y-10'>
                    <div className='border border-gray-500 rounded py-6 lg:p-10 shadow-lg'>
                        <h2 className='text-4xl text-black text-center font-mono'>Login</h2>
                        <LoginForm></LoginForm>
                    </div>
                </div>
                <div className="divider py-10 text-black">OR</div>
                <LoginWithSocial></LoginWithSocial>
            </div>
        </div>
    );
};

export default Login;
import React from 'react';
import Form from './Form';
import appointment from '../../Assets/images/appoinment.jpg'

const Appoinment = () => {

    return (
        <div className='bg-gray-50 py-16 px-4 lg:px-0 space-y-14' >
            <div className='border border-gray-500 rounded py-6 lg:p-10 max-w-sm md:max-w-md mx-auto shadow-lg'>
                <div className='space-y-10 text-center'>
                    <h3 className='text-blue-800 text-xl'>Make an Appointment</h3>
                    <h1 className='text-black font-serif text-2xl'>Make an Appointment to Doctor Visit</h1>
                </div>
                <Form></Form>
            </div>
        </div >

    );
};

export default Appoinment;
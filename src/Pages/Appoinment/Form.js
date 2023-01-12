import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';


const Form = () => {
    const [data, setData] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const service = e.target.service.value;
        const doctor = e.target.doctor.value;
        const year = e.target.year.value;
        const user = { name, email, service, doctor, year };
        if (name, email, service, doctor, year) {
            alert("Appoinment Successful")
        } else {
            alert("Input Error")
        }
        console.log(user);
    }
    return (
        <div>
            <form className='flex flex-col items-center space-y-6 text-black px-10 lg:px-0 pt-12' onSubmit={handleSubmit}>
                <input type="name" className='input input-bordered w-full bg-white border-black' name='name' placeholder="Your Full Name" />
                <input type="email" className='input w-full bg-white border-black' name='email' placeholder="Email Address" />
                <input type="text" className='input input-bordered w-full bg-white border-black' name='service' placeholder="Choose Services" />
                <input type="text" className='input input-bordered w-full bg-white border-black ' name='doctor' placeholder="Choose Doctor" />
                <input type="text" className='input input-bordered w-full bg-white border-black ' name='year' placeholder="Month Day, Year" />
                <button className='btn btn-primary w-full' type='submit'>Make Appointment</button>
            </form>
        </div>
    );
};

export default Form;
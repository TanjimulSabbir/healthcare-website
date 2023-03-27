import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [show, setShow] = useState(false);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        alert("Currently SignUp Services Unavailable")
        reset()
        reset()
    };

    return (
        <div className="pb-14 pt-10">
            <div className="card max-w-sm sm:max-w-md mx-auto shadow-2xl border">
                <div className="text-center lg:text-center mt-4">
                    <h1 className="text-3xl font-bold text-black">SignUp</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            type="text"
                            placeholder="Name"
                            className="input input-bordered bg-transparent"
                        />
                        <small className="text-red-500">{errors?.email?.message}</small>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email"
                            placeholder="Email"
                            className="input input-bordered bg-transparent"
                        />
                        <small className="text-red-500">{errors?.email?.message}</small>
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", { required: "Password is required", pattern: { value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[^\s]).{8,}$/, message: `Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character` } })} type={show ? "text" : "password"} placeholder="Password" className="input input-bordered bg-transparent" />

                        <FontAwesomeIcon onClick={() => setShow(!show)}
                            className="text-black cursor-pointer absolute top-[52px] right-2"
                            icon={show ? faEye : faEyeSlash}>
                        </FontAwesomeIcon>

                        <small className="text-red-500">
                            {errors?.password?.message}
                        </small>
                        <label className="label flex">
                            <a href="#p" className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                        </label>
                    </div>

                    <div className="form-control mt-4">
                        <button type="submit" className="btn btn-success">Sign Up</button>
                    </div>
                    <p className="text-sm link link-hover">
                        Already have an Account? <Link to={"/login"} className='link text-black'>Login</Link>
                    </p>
                </form>
            </div>
        </div>

    );
};

export default SignUp;

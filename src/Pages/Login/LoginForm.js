import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { async } from '@firebase/util';
import { faL } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [ToastMessageTrue, setToastMessageTrue] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (email && (password.length >= 6)) {
            signInWithEmailAndPassword(email, password)
        }
        else {
            return alert("provide valid input")
        }
        await ToastMessage();
    };

    const ToastMessage = () => {
        return setToastMessageTrue(true)
    };

    return (
        <div className=''>
            <form className='flex flex-col items-center space-y-6 text-black px-10 lg:px-0 pt-12' onSubmit={handleSubmit}>
                <input type="email" className='input w-full bg-white border-black' name='email' placeholder="Email Address" />
                <input type="password" className='input w-full bg-white border-black' name='password' placeholder="Password" />
                <button className='btn btn-primary w-full' type='submit'>Login</button>
            </form>
            <p className='text-black mt-4'>Are you new here? <Link to="/signup" className='link-primary'>Create an Account</Link></p>
            <div className=''>
                {/* The button to open modal */}
                <label htmlFor="my-modal-3" className="btn hidden">open modal</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" checked={ToastMessageTrue ? true : ""} id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setToastMessageTrue("")}>✕</label>
                        <h3 className="text-lg font-bold">{loading && "Loading"}</h3>
                        <p className="py-4">{error && error.message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
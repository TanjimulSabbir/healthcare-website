import React, { useState } from 'react';
import google from '../../Assets/Icon/google.svg'
import github from '../../Assets/Icon/githubi.svg'
import facebook from '../../Assets/Icon/facebook.svg'
import auth from '../../Firebase/Firebase.init';
import { useSignInWithGoogle, useSignInWithGithub, useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';

const LoginWithSocial = () => {
    const [signInWithGoogle, user1, Loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, Loading2, error2] = useSignInWithGithub(auth);
    const [ToastMessageTrue, setToastMessageTrue] = useState(false);
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth)
    const handleGoogleLogin = async () => {
        const userLogin = async () => {
            try {
                if (!user) {
                    signInWithGoogle()
                }
            } catch (error) {
                return;
            }
        }
        userLogin()
    }
    const handleGithubLogin = async () => {
        if (!user) {
            signInWithGithub()
        }
    };
    if (user) {
        return navigate("/")
    }
    return (
        <div className='space-y-8'>
            <div className='flex space-x-3'>
                <small>{(Loading1 || Loading2) && 'Loading...'}</small>
                <small className='text-success'>{(user1 || user2) && 'Sign Up Successful'}</small>
                <small className='text-error'>{(error1 || error2) && (error2?.message || error1?.message)}</small>
            </div>
            <button onClick={handleGoogleLogin} className='w-full py-2 rounded flex items-center justify-center border border-gray-700 text-black text-lg space-x-3 hover:bg-blue-500 transition delay-100 duration-200' type='submit' name='google'>
                <img className='w-10' src={google} alt="" srcset="" />
                <span> Login With Google</span>
            </button>
            <button onClick={handleGithubLogin} className='w-full py-2 rounded flex items-center justify-center border border-gray-700 text-black text-lg space-x-3 hover:bg-blue-500 transition delay-100 duration-200' type='submit'>
                <img className='w-10' src={github} alt="" srcset="" />
                <span> Login With Github</span>
            </button>
            <button className='w-full py-2 rounded flex items-center justify-center border border-gray-700 text-black text-lg space-x-3 hover:bg-blue-500 transition delay-100 duration-200' type='submit'>
                <img className='w-10' src={facebook} alt="" srcset="" />
                <span> Login With Facebook</span>
            </button>

        </div>
    );
};

export default LoginWithSocial;
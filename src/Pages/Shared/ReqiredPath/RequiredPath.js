import React from 'react';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import Login from '../../Login/Login';

const RequiredPath = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    if (user) {
        return children
    }
    else {
        return <Login></Login>
    }
};

export default RequiredPath;
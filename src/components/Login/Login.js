import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, setUser, error, setError } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(res => {
                setUser(res.user)
                history.push(url)
            })
            .catch(error => setError(error))
    }
    return (
        <div className="text-center mt-5 shadow w-50 p-5 mx-auto">
            <p className="text-primary fs-1 fw-normal">Please Login</p>
            <button onClick={handleGoogleLogin} className="login-with-google-btn mt-3">Sign In Using Google</button>
        </div>
    );
};

export default Login;
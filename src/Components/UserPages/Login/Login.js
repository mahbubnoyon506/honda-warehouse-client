import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Spiner from '../../Utilities/Spiner/Spiner';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);

    //Pass reset 
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const handleLogin = event => {
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    if (error || errorGoogle) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading || sending || loadingGoogle) {
        <Spiner></Spiner>
    }
    if (user || userGoogle) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='register-form w-50 mx-auto my-5'>
                <form onSubmit={handleLogin} className=''>
                    <input onBlur={(e) => setEmail(e.target.value)} className='w-100 d-block p-2 my-2' type="email" name="email" id="" placeholder='Email' required />
                    <input className='w-100 d-block p-2 my-2' type="password" name="password" id="" placeholder='Password' required />
                    <input className='w-100 d-block p-2 my-2' type="submit" value="Register" />
                </form>
                <p>Forget password? <button className='link border-0 bg-transparent text-primary' onClick={async () => {
                    await sendPasswordResetEmail(email);
                    toast("Password reset code send!");
                }} >Reset Password</button></p>
                <p>New to our warehouse? <Link to='/register' className='text-decoration-none'>Register</Link></p>
                <p className='special py-3'>Or</p>
                <button className='w-100 border-0' onClick={() => signInWithGoogle()} ><img className='img-fluid' src="https://i.ibb.co/9tw7sWw/google.png" alt="" /> Login With Google</button>
            </div>
        </div>
    );
};

export default Login;
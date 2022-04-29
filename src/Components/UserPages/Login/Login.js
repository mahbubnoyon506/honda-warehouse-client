import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const handleLogin = event => {
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    if (error || errorGoogle) {
        return (
            <div>
                <Spinner animation="border" variant="primary" />
            </div>
        );
    }
    if (loading || loadingGoogle) {
        return <p>Loading...</p>;
    }
    if (user || userGoogle) {
        return (
            navigate('/')
        );
    }

    return (
        <div>
            <div className='register-form w-50 mx-auto my-5'>
                <form onSubmit={handleLogin} className=''>
                    <input className='w-100 d-block p-2 my-2' type="email" name="email" id="" placeholder='Email' required />
                    <input className='w-100 d-block p-2 my-2' type="password" name="password" id="" placeholder='Password' required />
                    <input className='w-100 d-block p-2 my-2' type="submit" value="Register" />
                    <p>New to our warehouse? <Link to='/register'>Register</Link></p>
                    <p className='special py-3'>Or</p>
                </form>
                <button className='w-100 border-0' onClick={() => signInWithGoogle()} ><img className='img-fluid' src="https://i.ibb.co/9tw7sWw/google.png" alt="" /> Login With Google</button>
            </div>
        </div>
    );
};

export default Login;
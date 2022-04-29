import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Register.css'
import { Spinner } from 'react-bootstrap';

const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    //   Google and Github authentication
    const [signInWithGoogle, userGoogle] = useSignInWithGoogle(auth);

    // authentication with emai and password
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const handleRegister = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        const agree = event.target.checkbox.checked;
        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }
    if (user || userGoogle) {
        return (
            navigate('/')
        );
    }


    return (
        <div className='register-form w-50 mx-auto my-5'>
            <form onSubmit={handleRegister} className=''>
                <input className='w-100 d-block p-2 my-2' type="text" name="name" id="" placeholder='Name' required />
                <input className='w-100 d-block p-2 my-2' type="email" name="email" id="" placeholder='Email' required />
                <input className='w-100 d-block p-2 my-2' type="password" name="password" id="" placeholder='Password' required />
                <input className='me-2' type="checkbox" name="checkbox" id="" onClick={() => { setAgree(!agree) }} />
                {
                    agree ? <label className='text-primary ' htmlFor="">Checked</label> : <label className='text-danger' htmlFor="">Check to agree terms and conditions.</label>
                }
                <input className='w-100 d-block p-2 my-2' type="submit" value="Register" />
                <p>Do you have an account? <Link to='/login'>Login</Link></p>
                <p className='special py-3'>Or</p>
            </form>
            <button className='w-100 border-0' onClick={() => signInWithGoogle()} ><img className='img-fluid' src="https://i.ibb.co/9tw7sWw/google.png" alt="" /> Login With Google</button>
        </div>
    );
};

export default Register;
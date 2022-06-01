import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Footer.css'
import { BsFillPlayBtnFill, BsGoogle, BsGlobe, BsLinkedin, BsCart3, BsFillPersonFill } from "react-icons/bs";

const Footer = () => {
    const year = new Date().getFullYear();
    const handleEmailSubmit = event => {
        event.preventDefault();
        const email = { email: event.target.email.value };
        const url = `https://fierce-shelf-94421.herokuapp.com/newsletters`;
        axios.post(url, email)
            .then(function (response) {
                console.log(response);
                toast('Congratulation !! Your email is stored successfully')
                event.target.reset()
            })
    }
    return (
        <div className='footer mt-5'>
            <div className='row g-4 mx-5 py-4'>
                <div style={{ borderLeft: '5px solid #007CC3' }} className='col-md-3 px-4'>
                    <h4 className='pb-3'>Newsletter Signup</h4>
                    <p>Sign up for our monthly newsletter to receive promotional coupons and stay up to date on sales!</p>
                    <div><form onSubmit={handleEmailSubmit}><input className='border-0 p-1 w-75 mt-3' type="email" name="email" id="" placeholder='Email Address' /><input style={{ background: '#007CC3' }} className='text-white border-0 p-1 w-25' type="submit" value="Submit" /></form></div>
                </div>
                <div style={{ borderLeft: '5px solid #007CC3' }} className='col-md-3 px-4'>
                    <h4 className='pb-3'>My Account</h4>
                    <Link className='d-block text-decoration-none' to='#'>My Items</Link>
                    <Link className='d-block text-decoration-none' to='#'>Sign In</Link>
                    <Link className='d-block text-decoration-none' to='#'>Register</Link>
                    <Link className='d-block text-decoration-none' to='#'>My Cart</Link>
                </div>
                <div style={{ borderLeft: '5px solid #007CC3' }} className='col-md-3 px-4'>
                    <h4 className='pb-3'>Policies</h4>
                    <Link className='d-block text-decoration-none' to='#'>My Items</Link>
                    <Link className='d-block text-decoration-none' to='#'>Sign In</Link>
                    <Link className='d-block text-decoration-none' to='#'>Register</Link>
                    <Link className='d-block text-decoration-none' to='#'>My Cart</Link>
                </div>
                <div style={{ borderLeft: '5px solid #007CC3' }} className='col-md-3 ps-4'>
                    <h4 className='pb-3'>Contact</h4>
                    <p>Honda Auto Parts Warehouse
                        Larry H. Miller Honda Boise
                        7710 W Gratz Dr
                        Boise, ID 83709</p>
                    <Link className='text-decoration-none' to='#'>(866) 540-5368</Link>
                    <div className='de-flex'>
                        <Link className='text-decoration-none mx-2' to='#'><BsFillPlayBtnFill></BsFillPlayBtnFill></Link>
                        <Link className='text-decoration-none mx-2' to='#'><BsGoogle></BsGoogle></Link>
                        <Link className='text-decoration-none mx-2' to='#'><BsGlobe></BsGlobe></Link>
                        <Link className='text-decoration-none mx-2' to='#'><BsLinkedin></BsLinkedin></Link>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center py-4'>&copy; Copy right {year}. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div style={{background: '#252525'}} className='footer'>
            <div className='row g-4 mx-5 py-4'>
                <div style={{borderLeft: '5px solid #0D6EFD'}} className='col-md-3 px-4'>
                    <h4>Newsletter Signup</h4>
                    <p>Sign up for our monthly newsletter to receive promotional coupons and stay up to date on sales!</p>
                    <div><input className='border-0 p-1 w-75' type="email" name="email" id="" placeholder='Email Address'/><input className='bg-primary text-white border-0 p-1 w-25' type="submit" value="Submit" /></div>
                </div>
                <div style={{borderLeft: '5px solid #0D6EFD'}} className='col-md-3 px-4'>
                    <h4>My Account</h4>
                    <Link className='d-block text-decoration-none' to='#'>My Items</Link>
                    <Link className='d-block text-decoration-none' to='#'>Sign In</Link>
                    <Link className='d-block text-decoration-none' to='#'>Register</Link>
                    <Link className='d-block text-decoration-none' to='#'>My Cart</Link>
                </div>
                <div style={{borderLeft: '5px solid #0D6EFD'}} className='col-md-3 px-4'>
                    <h4>Policies</h4>
                    <Link className='d-block text-decoration-none' to='#'>My Items</Link>
                    <Link className='d-block text-decoration-none' to='#'>Sign In</Link>
                    <Link className='d-block text-decoration-none' to='#'>Register</Link>
                    <Link className='d-block text-decoration-none' to='#'>My Cart</Link>
                </div>
                <div style={{borderLeft: '5px solid #0D6EFD'}} className='col-md-3 ps-4'>
                    <h4>Contact</h4>
                    <p>HONDA Auto Parts Warehouse
                        Larry H. Miller Honda Boise
                        7710 W Gratz Dr
                        Boise, ID 83709</p>
                    <Link className='text-decoration-none' to='#'>(866) 540-5368</Link>
                </div>
            </div>
            <div>
                <p className='text-center py-4'>&copy; Copy right {year}. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
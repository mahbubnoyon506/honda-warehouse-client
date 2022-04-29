import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Utilities/Banner/Banner';



import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='homebanner'>
                <div className='serch-field w-50 mx-auto bg-light p-3'>
                    <h3 className='text-primary'>Search your expected items here</h3>
                    <input className='w-75 p-2 border rounded-start' type="search" name="search" id="" placeholder='Search Item' /><button className='px-3 py-2 w-25 bg-primary border border-primary text-white'>Search</button>
                </div>
            </div>
            <div className="text-div container my-5">
                <h5 className='text-center'>Honda Auto Parts Warehouse</h5>
                <p className=' text-center'>Here at Honda Auto Parts Warehouse you can find any part of accessory you need for every Honda model. With full OEM parts catalogs and VIN verification, we make it easy to buy the parts you need and have them delivered to your door at a fraction of the cost when compared to your local parts department. Just <span className='text-primary'>Select your Honda model</span> to get started and if you have any questions you can <span className='text-primary'>Contact us</span> and one of our Honda part experts will be happy to help. Thank you for shopping with us!</p>
            </div>
            <div className='row m-5'>
                <div className='col-md-4'>
                    <h2 className='mt-0 pb-3'>Our Parts Category</h2>
                    <Link className='fw-bold text-decoration-none d-block my-2' to='#'><img className='w-25 me-3' src="https://i.ibb.co/k66h3G7/catg1.jpg" alt="" /> Air Filter</Link>
                    <Link className='fw-bold text-decoration-none d-block my-2' to='#'><img className='w-25 me-3' src="https://i.ibb.co/M6mnSMD/catg2.jpg" alt="" /> Alternator</Link>
                    <Link className='fw-bold text-decoration-none d-block my-2' to='#'><img className='w-25 me-3' src="https://i.ibb.co/qYyF4LG/catg7.jpg" alt="" /> Radiators</Link>
                    <Link className='fw-bold text-decoration-none d-block my-2' to='#'><img className='w-25 me-3' src="https://i.ibb.co/Y7Yjs8d/catg8.jpg" alt="" /> Spark Plugs</Link>
                    <Link className='fw-bold text-decoration-none d-block my-2' to='#'><img className='w-25 me-3' src="https://i.ibb.co/GVftwHZ/catg5.jpg" alt="" /> Head Lights</Link>
                    <Link className='fw-bold text-decoration-none d-block my-2' to='#'><img className='w-25 me-3' src="https://i.ibb.co/S3SMSrm/catg6.jpg" alt="" /> Oil Filter</Link>
                    <Link className='fw-bold text-decoration-none d-block my-2' to='#'><img className='w-25 me-3' src="https://i.ibb.co/C1KCWYG/catg3.jpg" alt="" /> Belts</Link>
                    <Link className='fw-bold text-decoration-none d-block my-2' to='#'><img className='w-25 me-3' src="https://i.ibb.co/rcGhJQL/catg4.jpg" alt="" /> Break Pads</Link>
                </div>
                <div className='col-md-8'>
                    <Banner></Banner>
                    <div className='my-5'>
                        <h4>Special Categories</h4>
                        <div className='d-md-flex align-items-center justify-content-around mt-4'>
                            <img className='img-fluid rounded-circle w-25' src="https://i.ibb.co/drtw6L5/lights.jpg" alt="" />
                            <img className='img-fluid rounded-circle w-25' src="https://i.ibb.co/YddczzY/roof-rak.jpg" alt="" />
                            <img className='img-fluid rounded-circle w-25' src="https://i.ibb.co/yBd7JpB/mats.png" alt="" />
                        </div>
                    </div>
                    <div className='my-5'>
                    <h4>Featured Items</h4>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
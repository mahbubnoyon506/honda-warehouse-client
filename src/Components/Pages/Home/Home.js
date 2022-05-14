import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../../Utilities/Banner/Banner';
import Products from '../../Utilities/Products/Products';
import Title from '../../Utilities/Title/Title';



import './Home.css'

const Home = () => {
    return (
        <div>
            <Title title='Home'></Title>
            <div className='homebanner'>
                <div className='serch-field w-50 mx-auto bg-light p-3'>
                    <h3 className='pb-3'>Search your expected items here</h3>
                    <input className=' w-75 p-2 border rounded-start' type="search" name="search" id="" placeholder='Search Item' /><button className='w-25 px-3 py-2 border border-primary text-white'>Search</button>
                </div>
            </div>
            <div className="text-div container my-5">
                <h5 className='text-center py-2'>Honda Auto Parts Warehouse</h5>
                <p className=' text-center'>Here at Honda Auto Parts Warehouse you can find any part of accessory you need for every Honda model. With full OEM parts catalogs and VIN verification, we make it easy to buy the parts you need and have them delivered to your door at a fraction of the cost when compared to your local parts department. Just <span>Select your Honda model</span> to get started and if you have any questions you can <span>Contact us</span> and one of our Honda part experts will be happy to help. Thank you for shopping with us!</p>
            </div>
            <div className='category-wrap row m-5'>
                <div className='category col-md-3'>
                    <h2 className='mt-0 pb-3'>Our Categories</h2>
                    <Link className='category-class' to='#'><img src="https://i.ibb.co/k66h3G7/catg1.jpg" alt="" /> Air Filter</Link>
                    <Link className='category-class' to='#'><img src="https://i.ibb.co/S3SMSrm/catg6.jpg" alt="" /> Oil Filter</Link>
                    <Link className='category-class' to='#'><img src="https://i.ibb.co/M6mnSMD/catg2.jpg" alt="" /> Alternator</Link>
                    <Link className='category-class' to='#'><img src="https://i.ibb.co/rcGhJQL/catg4.jpg" alt="" /> Break Pads</Link>
                    <Link className='category-class' to='#'><img src="https://i.ibb.co/qYyF4LG/catg7.jpg" alt="" /> Radiators</Link>
                    <Link className='category-class' to='#'><img src="https://i.ibb.co/Y7Yjs8d/catg8.jpg" alt="" /> Spark Plugs</Link>
                    <Link className='category-class' to='#'><img src="https://i.ibb.co/GVftwHZ/catg5.jpg" alt="" /> Head Lights</Link>
                    <Link className='category-class' to='#'><img src="https://i.ibb.co/C1KCWYG/catg3.jpg" alt="" /> Belts</Link>
                </div>
                <div className='col-md-9'>
                    <div>
                        <Banner></Banner>
                    </div>
                    <div className='my-4'>
                    <h4 className='py-4'>Popular Category</h4>
                       <div className='d-flex justify-content-around'>
                          <div className="card mx-4">
                            <div className="content">
                                <div className="front">
                                   <img className='img-fluid' src="https://i.ibb.co/drtw6L5/lights.jpg" alt="" />
                                </div>
                                <div className="back">
                                    <div className='mt-5'>
                                      <h5 className='mb-2'>LIGHTS</h5>
                                      <Button style={{background: '#fff', color: '#007CC3'}}>Show More</Button>
                                    </div>
                                </div>
                            </div>
                          </div>                              
                          <div className="card mx-4">
                            <div className="content">
                                <div className="front">
                                   <img className='img-fluid' src="https://i.ibb.co/YddczzY/roof-rak.jpg" alt="" />
                                </div>
                                <div className="back">
                                    <div className='mt-5'>
                                      <h5 className='mb-2'>ROOF RACKS</h5>
                                      <Button style={{background: '#fff', color: '#007CC3'}}>Show More</Button>
                                    </div>
                                </div>
                            </div>
                          </div>
                           <div className="card mx-4">
                            <div className="content">
                                <div className="front">
                                   <img className='img-fluid' src="https://i.ibb.co/yBd7JpB/mats.png" alt="" />
                                </div>
                                <div className="back">
                                    <div className='mt-5'>
                                      <h5 className='mb-2'>FLOOR MATS</h5>
                                      <Button style={{background: '#fff', color: '#007CC3'}}>Show More</Button>
                                    </div>
                                </div>
                            </div>
                           </div>
                       </div>
                    </div>
                    <div className='my-4'>
                        <h4 className='py-3'>Popular Product</h4>
                        <Products></Products>
                        <div className='d-flex justify-content-center'>
                            <Link  to='/manageitems'><Button style={{background: '#007CC3'}}>Manage Inventories</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

import React from 'react';
import {Link, useParams } from 'react-router-dom';
import useProductId from '../../Utilities/Hook/ProductId';

const Inventory = () => {
    const { id } = useParams();
    const [product] = useProductId(id);
    console.log(product)
    return (
        <div className='w-50 mx-auto border rounded my-5 p-3'>
            <img className='w-100' src={product.img} alt="" />
            <h3>{product.name}</h3>
            <h5>Suppliar: {product.suppliar}</h5>
            <p>Product Quantity: {product.price} Pieces</p>
            <p>Product Price: $ {product.quantity}</p>
            <p>Description: {product.description}</p>
            
            <div className='my-3'>
                <button className='w-100 border-0 p-2 mb-3'>Deliver</button> 
                <form className='d-flex justify-content-around align-items-cente'>
                    <input className='w-50 p-2' type="number" name="" id="" />
                    <input className='w-50 border-0 p-2 ms-3' type="submit" value="Update Quantity" />
                </form>
            </div>
            <Link to='/manageitems'><button className='w-100 border-0 p-2 mb-3'>Manage Inventory Item</button> </Link>
        </div>
    );
};

export default Inventory;
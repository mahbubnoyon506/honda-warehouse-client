import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductId from '../../Utilities/Hook/ProductId';
import { BsSuitHeartFill } from "react-icons/bs";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
import Title from '../../Utilities/Title/Title';

const Inventory = () => {
    const [user] = useAuthState(auth);
    const [added, setAdded] = useState(false)
    const { id } = useParams();
    const [product, setProduct] = useProductId(id);


    const handleAdded = () => {
        const likedItem = {
            user: user.email,
            name: product.name,
            img: product.img,
            suppliar: product.suppliar,
            price: product.price,
            quantity: product.quantity,
            description: product.description
        }
        axios.post('http://localhost:5000/items', likedItem)
            .then(function (response) {
                setAdded(response);
                toast('Item Added to My Items, To remove go to My Items page.')
            })
    }


    const handleDecrease = () => {
        const number = parseInt(product.quantity);
        const newNumber = number - 1
        const setNew = {
            quantity: newNumber
        }
        const url = `http://localhost:5000/products/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(setNew)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('Success', data); 
                alert('Want to deliver product?')
                window.location.reload()
            })
    }

    const handleIncrease = event => {
        // event.preventDefault();
        const quantity = {
            quantity: event.target.quantity.value
        };
        const url = `http://localhost:5000/products/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quantity)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('Success', data);
                alert('Want to update product?')
                event.target.reset()
            })
    }

    return (
        <div className='w-50 mx-auto border rounded my-5 p-3'>
            <Title title='Inventory'></Title>
            <img className='w-100' src={product.img} alt="" />
            <div className='d-flex justify-content-between my-3'>
                <h3>{product.name}</h3>
                <Link to='#' onClick={() => handleAdded(!added)}>
                    {
                        added ? <BsSuitHeartFill style={{ color: '#007CC3' }} className='fs-1'></BsSuitHeartFill> : <BsSuitHeartFill className='fs-1 text-danger'></BsSuitHeartFill>
                    }
                </Link>
            </div>
            <h5>Suppliar: {product.suppliar}</h5>
            <p>Product Price: $ {product.price}</p>
            <div className='d-md-flex align-items-center'>
                <p>Product Quantity: {product.quantity} Pieces</p>
                <button onClick={handleDecrease} style={{ color: '#007CC3' }} className='ms-3 w-25 border-0 p-2'>Deliver</button>

            </div>
            <p>Description: {product.description}</p>
            <div className='my-3'>
                <form onSubmit={handleIncrease} className='d-flex justify-content-around align-items-cente'>
                    <input className='w-50 p-2' type="text" name="quantity" id="" placeholder='Type Quantity' />
                    <input style={{ background: '#007CC3', color: '#fff' }} className='w-50 border-0 p-2 ms-3' type="submit" value="Update Quantity" />
                </form>
            </div>
            <Link to='/manageitems'><button style={{ background: '#007CC3', color: '#fff' }} className='w-100 border-0 p-2 mb-3'>Manage Inventory Item</button> </Link>
        </div>
    );
};

export default Inventory;
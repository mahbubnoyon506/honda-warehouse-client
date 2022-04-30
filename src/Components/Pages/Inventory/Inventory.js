import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductId from '../../Utilities/Hook/ProductId';
import { BsSuitHeartFill } from "react-icons/bs";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import { toast } from 'react-toastify';

const Inventory = () => {
    const [user] = useAuthState(auth);
    const [added, setAdded] = useState(false)
    const { id } = useParams();
    const [product] = useProductId(id);
    
    const handleAdded = () =>{
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
    return (
        <div className='w-50 mx-auto border rounded my-5 p-3'>
            <img className='w-100' src={product.img} alt="" />
            <div className='d-flex justify-content-between my-3'>
                <h3>{product.name}</h3>
                <Link to='#' onClick={() => handleAdded(!added)}>
                {
                   added ? <BsSuitHeartFill className='fs-1 text-primary'></BsSuitHeartFill> : <BsSuitHeartFill className='fs-1 text-danger'></BsSuitHeartFill>
                }
                </Link>
            </div>
            <h5>Suppliar: {product.suppliar}</h5>
            <p>Product Quantity: {product.price} Pieces</p>
            <p>Product Price: $ {product.quantity}</p>
            <p>Description: {product.description}</p>
            <div className='my-3'>
                <button className='w-100 border-0 p-2 mb-3'>Deliver</button>
                <form className='d-flex justify-content-around align-items-cente'>
                    <input className='w-50 p-2' type="number" name="" id="" placeholder='Type Quantity'/>
                    <input className='w-50 border-0 p-2 ms-3' type="submit" value="Update Quantity" />
                </form>
            </div>
            <Link to='/manageitems'><button className='w-100 border-0 p-2 mb-3'>Manage Inventory Item</button> </Link>
        </div>
    );
};

export default Inventory;
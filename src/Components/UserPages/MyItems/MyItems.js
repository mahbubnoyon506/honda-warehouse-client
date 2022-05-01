import React from 'react';
import { Button } from 'react-bootstrap';
import useMyItems from '../../Utilities/Hook/MyItemsHook';
import { BsTrashFill } from "react-icons/bs";
import { toast } from 'react-toastify';

const MyItems = () => {
    const [items, setItems] = useMyItems();
    const handleRemove = id => {
        const url = `http://localhost:5000/items/${id}`;
        const agree = window.confirm('Are you sure to remove it?');
        if(agree){
            fetch(url, {
                method: 'DELETE'
            }
            )
            .then(res => res.json())
            .then(data => {
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
                toast('Item removed')
            })
        }
    }
    return (
        <div className='my-5'>
            <h4 className='text-center my-3'>Your wishlist product count:- {items.length}</h4>
            <div className='row g-5 mx-5 '>
                {
                    items.map(item =>
                        <div className='col-md-3' key={item._id}>
                            <img className='img-fluid' src={item.img} alt="" />
                            <h4 className='text-center py-2'>{item.name}</h4>
                            <p className='text-center'>Suppliar: {item.suppliar}</p>
                            <Button className='w-100 my-3' style={{background: '#007CC3'}} onClick={() => handleRemove(item._id)}>Remove <BsTrashFill></BsTrashFill></Button>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default MyItems;
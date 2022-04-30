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
            })
            .then(res => res.json())
            .then(data => {
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
                toast('Item removed')
            })
        }
    }
    return (
        <div>
            <h3>this is my items {items.length}</h3>
            <div className='row g-5 m-5'>
                {
                    items.map(item =>
                        <div className='col-md-3' key={item._id}>
                            <img className='img-fluid' src={item.img} alt="" />
                            <h3 className='text-center'>{item.name}</h3>
                            <p className='text-center'>Suppliar: {item.suppliar}</p>
                            <div className='d-flex justify-content-center my-2'><Button onClick={() => handleRemove(item._id)}>Remove <BsTrashFill></BsTrashFill></Button></div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default MyItems;
import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import './AddItems.css'

const AddItems = () => {

    const handleAddItem = event => {
        event.preventDefault()
       const item = {
        name: event.target.name.value,
        img: event.target.img.value,
        price: event.target.price.value,
        quantity: event.target.quantity.value,
        suppliar: event.target.suppliar.value,
        description: event.target.description.value 
       }
       axios.post('http://localhost:5000/products', item )
       .then(function (response) {

       })
       toast('Item Added')
    }

    return (
        <div className='w-50 mx-auto my-5'>
           <form onSubmit={handleAddItem} className='add-product-form'>
               <input type="text" name="name" id="" placeholder='Product name'/>
               <input type="text" name="suppliar" id="" placeholder='Sppliar name'/>
               <input type="text" name="price" id="" placeholder='Product Price'/>
               <input type="text" name="quantity" id="" placeholder='product Quantity'/>
               <input type="text" name="img" id="" placeholder='Product URL'/>
               <textarea type="text" name="description" id="" placeholder='Product Sescription'/>
               <input type="submit" value="Add Item" />
           </form>
        </div>
    );
};

export default AddItems;
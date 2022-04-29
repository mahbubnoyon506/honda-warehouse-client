import React from 'react';
import useProducts from '../Hook/AllproductHook';
import './Products.css'

const Products = () => {
    const [products] = useProducts();
    console.log(products);
    // const newProducts = products.slice(0, 6)
    return (
        <div className='row my-3'>
            {     
                products.slice(0, 6).map(product => 
                <div className='product col-md-4 p-3' key={product._id}>
                   <img className='img-fluid shadow p-3 rounded' src={product.img} alt="" />
                   <h4>{product.name.slice(0, 15) + '...'}</h4>
                   <p>{product.suppliar}</p>
                   <p>Quantity: {product.quantity}</p>
                   <h4>Price: $ {product.price}</h4>
                   <p>{product.description.slice(0, 50) + '...'}</p>
                   <button style={{background: '#007CC3', color: '#fff' } } className='w-100 border-0 '>Manage Stock</button>
                </div>
                )
            }
        </div>
    );
};

export default Products;
import React from 'react';
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
import { BsTrashFill } from "react-icons/bs";
import { toast } from 'react-toastify';
import useProducts from '../../Utilities/Hook/AllproductHook';
const ManageItems = () => {
    const [products, setProducts] = useProducts();
    const handleDelete = id => {
        const url = `https://honda-warehouse-server.onrender.com/products/${id}`
        const agree = window.confirm('Are you sure to remove it?')
        if (agree) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining)
                    toast('Item deleted')
                })
        }
    }
    return (
        <div className='m-5'>
            <h4 className='text-center pb-3'>Remove item from here</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Suppliar Name</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) =>
                            <tr key={product._id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.suppliar}</td>
                                <td className='text-center'><button onClick={() => handleDelete(product._id)} className='text-danger border-0'>Delete <BsTrashFill /></button></td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>

            <div className='d-flex justify-content-center py-2'>
                <Link to='/additems'><button style={{ background: '#007CC3' }} className='text-white border-0 py-2 px-5'>Add New Item</button></Link>
            </div>

        </div>

    );
};

export default ManageItems;
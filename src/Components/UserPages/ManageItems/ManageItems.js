import React from 'react';
import Table from 'react-bootstrap/Table'
import {Link } from 'react-router-dom';
import { BsTrashFill } from "react-icons/bs";
import { toast } from 'react-toastify';
import useProducts from '../../Utilities/Hook/AllproductHook';
const ManageItems = () => {
    const [products, setProducts] = useProducts();
    const handleDelete = id => {
        const url = `http://localhost:5000/products/${id}`
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
            {
                products.map(product =>
                    <div key={product._id}>
                        <Table className='' striped bordered hover>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>{product.name}</td>
                                    <td>{product.suppliar}</td>
                                    <td className='text-center'><button onClick={() => handleDelete(product._id)} className='text-danger border-0'>Delete <BsTrashFill /></button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>)
            }

            {/* <Table  className='' striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Supplier</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td className='text-center'><button className='text-danger border-0'>Delete <BsTrashFill /></button></td>
                    </tr>
                </tbody>
            </Table> */}
            <div className='d-flex justify-content-center p-3'>
                <Link to='/additems'><button className=' border-0 p-3'>Add New Item</button></Link>
            </div>

        </div>

    );
};

export default ManageItems;
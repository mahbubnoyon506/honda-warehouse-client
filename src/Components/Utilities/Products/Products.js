
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../Hook/AllproductHook';
import Spiner from '../Spiner/Spiner';
import './Products.css'

const Products = () => {
    // const [products, isloading] = useProducts();
    const [products, setProducts] = useState([]);
    const [isloading, setIsloading] = useState(true)
    const [limit, setLimit] = useState(3);
    const [page , setPage] = useState(0);
    const [pageCount, setPageCount]= useState(0)

    useEffect(() => {
        const url = `https://honda-warehouse-server.onrender.com/products?limit=${limit}&pageNumber=${page}`;
       (async () => {
           const {data} = await axios.get(url)
           setProducts(data.data)
           setPageCount(Math.ceil(data.count/limit))
           setIsloading(false)
       })()
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setProducts(data.data)
        //         setPageCount(Math.ceil(data.count/limit))
        //         setIsloading(false)
        //     })
    }, [limit, page])



    if (isloading) {
        return <Spiner></Spiner>
    }

    return (
        <>

            <div className='row my-3'>
                {
                    products.map(product =>
                        <div className='col-lg-4 col-md-6' key={product._id}>
                            <div className='product'>
                                <img className='img-fluid shadow p-3 rounded' src={product.img} alt="" />
                                <div className='mb-3 px-2'>
                                    <h4 className='py-3'>{product.name.slice(0, 15) + '...'}</h4>
                                    <h5>Price: $ {product.price}</h5>
                                    <p>{product.suppliar}</p>
                                    <p>Quantity: {product.quantity}</p>
                                    <p>{product.description.slice(0, 50) + '...'}</p>
                                </div>

                                <Link to={`/inventory/${product._id}`}><button style={{ background: '#007CC3', color: '#fff' }} className='w-100 border-0 py-2 '>Manage Stock</button></Link>
                            </div>
                        </div>
                    )
                }

                <div className='d-flex justify-content-end'>
                    {
                        [...Array(pageCount).keys()].map((number, index) =>
                            <button key={index} type='button' className={`btn btn-outline-primary mx-1 ${number === page ? "bg-primary text-white" : ""}`} onClick={() => setPage(index)}>
                                {number + 1}
                            </button>
                        )
                    }
                    <select defaultValue={limit} name="" id="" className='btn btn-primary mx-1' onChange={e => setLimit(e.target.value)}>
                        <option  value="3">3</option>
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option value="12">12</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default Products;
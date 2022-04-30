
import { Link} from 'react-router-dom';
import useProducts from '../Hook/AllproductHook';
import './Products.css'

const Products = () => {
    const [products] = useProducts();
    
    return (
        <div className='row my-3'>
            {
                products.slice(0, 6).map(product =>
                    <div className='product col-md-4 p-3' key={product._id}>
                        <img className='img-fluid shadow p-3 rounded' src={product.img} alt="" />
                        <div className='my-3'>
                            <h3>{product.name.slice(0, 15) + '...'}</h3>
                            <h5>Price: $ {product.price}</h5>
                            <p>{product.suppliar}</p>
                            <p>Quantity: {product.quantity}</p>
                            <p>{product.description.slice(0, 50) + '...'}</p>
                        </div>
                        <Link to={`/inventory/${product._id}`}><button style={{ background: '#007CC3', color: '#fff' }} className='w-100 border-0 '>Manage Stock</button></Link>
                    </div>
                )
            }
        </div>
    );
};

export default Products;
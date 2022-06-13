
import { Link} from 'react-router-dom';
import useProducts from '../Hook/AllproductHook';
import Spiner from '../Spiner/Spiner';
import './Products.css'

const Products = () => {
    const [products, isloading] = useProducts();
    
    if(isloading){
      return <Spiner></Spiner>
    }
    return (
        <div className='row my-3'>
            {
                products.slice(0, 6).map(product =>
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
        </div>
    );
};

export default Products;
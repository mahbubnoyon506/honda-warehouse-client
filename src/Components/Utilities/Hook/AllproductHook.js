import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `https://fierce-shelf-94421.herokuapp.com/products`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return [products, setProducts];
}
export default useProducts;
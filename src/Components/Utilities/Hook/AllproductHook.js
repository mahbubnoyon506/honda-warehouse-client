import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [isloading, setIsloading] = useState(true)

    useEffect(() => {
        const url = `https://fierce-shelf-94421.herokuapp.com/products`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setIsloading(false)
        })
    }, [])
    return [products, isloading];
}
export default useProducts;
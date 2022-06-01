import { useEffect, useState } from "react";
const useProductId = id => {
    const [product, setProduct] = useState(id);
    useEffect(() => {
        const url = `https://fierce-shelf-94421.herokuapp.com/products/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [id])
    return [product, setProduct];
}
export default useProductId;
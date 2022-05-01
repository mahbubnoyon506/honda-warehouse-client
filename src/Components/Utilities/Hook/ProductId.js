import { useEffect, useState } from "react";
const useProductId = id => {
    const [product, setProduct] = useState(id);
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [id])
    return [product, setProduct];
}
export default useProductId;
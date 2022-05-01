import { useEffect, useState } from "react";
const useMyItems = () => {
    const [items, setItems] = useState([]);

    useEffect( () => {
        const url = `http://localhost:5000/items`;
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
    return [items, setItems]
}
export default useMyItems;
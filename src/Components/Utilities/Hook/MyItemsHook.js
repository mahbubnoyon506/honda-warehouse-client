import { useEffect, useState } from "react";
const useMyItems = () => {
    const [items, setItems] = useState([]);

    useEffect( () => {
        const url = `https://fierce-shelf-94421.herokuapp.com/items`;
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
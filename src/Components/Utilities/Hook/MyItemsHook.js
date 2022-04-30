import { useEffect, useState } from "react";
const useMyItems = () => {
    const [items, setItems] = useState([]);

    useEffect( () => {
        const url = `http://localhost:5000/items`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
    return [items, setItems]
}
export default useMyItems;
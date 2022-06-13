import { useEffect, useState } from "react";
const useMyItems = () => {
    const [items, setItems] = useState([]);
    const [isloading, setIsloading] = useState(true)

    useEffect( () => {
        const url = `https://fierce-shelf-94421.herokuapp.com/items`;
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setItems(data)
            setIsloading(false)
        })
    }, [])
    return [items, isloading]
}
export default useMyItems;
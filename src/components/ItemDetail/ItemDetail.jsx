import './ItemDetail.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ItemDetail() {

    const [item, setItem] = useState([]);
    const { id } = useParams();
    //console.log(id);

    useEffect(() => {
        const getItem = async() => {
        const it = await axios.get('http://localhost:5000/items/'+id);
        setItem(it.data);
        };
        getItem();
    }, [id]);

    return (
        <>
            <div>
                <h2>{item.name}</h2>      
                <h4>PRICE: {item.price}</h4> 
                <h4>CLASS: {item.class}</h4>
                <h4>DESCRIPTION: {item.description}</h4> 
            </div>
        </>
    )
}

export default ItemDetail;
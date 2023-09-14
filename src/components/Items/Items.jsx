import './Items.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

function Items() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async() => {
        const item = await axios.get('http://localhost:5000/items');
        //console.log(creature.data);
        setItems(item.data);
        };
        getItems();
    }, []);

    return (
    <> 
        {items.length ? (
        <ul>
          {items.map((item, i) => (
            <li key={i}>
                <Link to={`/item/${item._id}`}>
                    <h3>{item.name}</h3> 
                </Link>
            </li>
            
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
    )
}

export default Items;
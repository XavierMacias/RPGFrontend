import './Elements.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

function Elements() {

    const [elements, setElements] = useState([]);

    useEffect(() => {
        const getElements = async() => {
        const element = await axios.get('http://localhost:5000/elements');
        //console.log(creature.data);
        setElements(element.data);
        };
        getElements();
    }, []);

    return (
    <> 
        {elements.length ? (
        <ul>
          {elements.map((element, i) => (
           
            <li key={i}>
                <Link to={`/element/${element._id}`}>
                    <h3>{element.name}</h3> 
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

export default Elements;
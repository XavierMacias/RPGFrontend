import './Magics.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

function Magics() {

    const [magics, setMagics] = useState([]);

    useEffect(() => {
        const getMagics = async() => {
        const magic = await axios.get('http://localhost:5000/magics');
        //console.log(creature.data);
        setMagics(magic.data);
        };
        getMagics();
    }, []);

    return (
    <> 
        {magics.length ? (
        <ul>
          {magics.map((magic, i) => (
           
            <li key={i}>
                <Link to={`/magic/${magic._id}`}>
                    <h3>{magic.name}</h3> 
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

export default Magics;
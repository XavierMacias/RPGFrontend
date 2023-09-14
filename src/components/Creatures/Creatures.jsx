import './Creatures.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

function Creatures() {

    const [creatures, setCreatures] = useState([]);

    useEffect(() => {
        const getCreatures = async() => {
        const creature = await axios.get('http://localhost:5000/creatures');
        //console.log(creature.data);
        setCreatures(creature.data);
        };
        getCreatures();
    }, []);

    return (
    <> 
        {creatures.length ? (
        <ul>
          {creatures.map((creature, i) => (
            <li key={i}>
                <Link to={`/creature/${creature._id}`}>
                    <h3>{creature.name}</h3> 
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

export default Creatures;
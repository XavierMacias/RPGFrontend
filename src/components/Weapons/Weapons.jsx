import './Weapons.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

function Weapons() {

    const [weapons, setWeapons] = useState([]);

    useEffect(() => {
        const getWeapons = async() => {
        const weapon = await axios.get('http://localhost:5000/weapons');
        //console.log(creature.data);
        setWeapons(weapon.data);
        };
        getWeapons();
    }, []);

    return (
    <> 
        {weapons.length ? (
        <ul>
          {weapons.map((weapon, i) => (
           
            <li key={i}>
                <Link to={`/weapon/${weapon._id}`}>
                    <h3>{weapon.name}</h3> 
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

export default Weapons;
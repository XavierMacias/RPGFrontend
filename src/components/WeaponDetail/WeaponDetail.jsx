import './WeaponDetail.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function WeaponDetail() {

    const [weapon, setWeapon] = useState([]);
    const { id } = useParams();
    //console.log(id);

    useEffect(() => {
        const getWeapon = async() => {
        const weap = await axios.get('http://localhost:5000/weapons/'+id);
        setWeapon(weap.data);
        };
        getWeapon();
    }, [id]);

    return (
        <>
            {weapon.element ? (
                <div>
                    <h2>{weapon.name}</h2>      
                    <h3>{weapon.element.name}</h3> 
                    <h4>PRICE: {weapon.price}</h4> 
                    <h4>CATEGORY: {weapon.category}</h4> 
                    <h4>CLASS: {weapon.class}</h4>
                    <h4>DESCRIPTION: {weapon.description}</h4> 
                </div>
            ) : (
                <p></p>
            )}
        </>
    )
}

export default WeaponDetail;
import './MagicDetail.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MagicDetail() {

    const [magic, setMagic] = useState([]);
    const { id } = useParams();
    //console.log(id);

    useEffect(() => {
        const getMagic = async() => {
        const mag = await axios.get('http://localhost:5000/magics/'+id);
        setMagic(mag.data);
        };
        getMagic();
    }, [id]);

    return (
        <>
            {magic.element ? (
                <div>
                    <h2>{magic.name}</h2>      
                    <h3>{magic.element.name}</h3> 
                    <h4>POWER: {magic.power}</h4> 
                    <h4>ACCURACY: {magic.accuracy}</h4> 
                    <h4>MAGIC POINTS: {magic.magicPoints}</h4>
                    <h4>CATEGORY: {magic.category}</h4> 
                    <h4>DESCRIPTION: {magic.description}</h4> 
                </div>
            ) : (
                <p></p>
            )}
        </>
    )
}

export default MagicDetail;
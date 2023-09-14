import './ElementDetail.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ElementDetail() {

    const [element, setElement] = useState([]);
    const { id } = useParams();
    //console.log(id);

    useEffect(() => {
        const getElement = async() => {
        const ele = await axios.get('http://localhost:5000/elements/'+id);
        setElement(ele.data);
        };
        getElement();
    }, [id]);

    return (
        <>
            <h2>{element.name}</h2>
            <h3>Weaknesses: </h3>
            {element.weaknesses ? (
                <ul>
                {element.weaknesses.map((weakness, i) => (
                    <li key={i}>
                        <h4>{weakness}</h4> 
                    </li>
                ))}
                </ul>
            ) : (
                <p></p>
            )}
            <h3>Resistances: </h3>
            {element.resistances ? (
                <ul>
                {element.resistances.map((resistance, i) => (
                    <li key={i}>
                        <h4>{resistance}</h4> 
                    </li>
                ))}
                </ul>
            ) : (
                <p></p>
            )}
            <h3>Inmunities: </h3>
            {element.inmunities ? (
                <ul>
                {element.inmunities.map((inmunity, i) => (
                    <li key={i}>
                        <h4>{inmunity}</h4> 
                    </li>
                ))}
                </ul>
            ) : (
                <p></p>
            )}
        </>

        
    )
}

export default ElementDetail;
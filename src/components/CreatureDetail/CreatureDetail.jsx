import './CreatureDetail.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function CreatureDetail() {

    const [creature, setCreature] = useState([]);
    const { id } = useParams();
    //console.log(id);

    useEffect(() => {
        const getCreature = async() => {
        const creat = await axios.get('http://localhost:5000/creatures/'+id);
        setCreature(creat.data);
        };
        getCreature();
    }, [id]);

    return (
        <>
            <div>
                <h2>{creature.name}</h2>
                {creature.element1 ? (
                    <h3>{creature.element1.name}</h3> 
                ) : (
                    <p></p>
                )}
                {creature.element2 ? (
                    <h3>{creature.element2.name}</h3> 
                ) : (
                    <p></p>
                )}

                <h3>Stats: </h3>
                {creature.statsBase ? (
                    <ul>
                        <li key={0}>
                            <h4>HP: {creature.statsBase[0]}</h4> 
                        </li>
                        <li key={1}>
                            <h4>PP: {creature.statsBase[1]}</h4> 
                        </li>
                        <li key={2}>
                            <h4>Attack: {creature.statsBase[2]}</h4> 
                        </li>
                        <li key={3}>
                            <h4>Defense: {creature.statsBase[3]}</h4> 
                        </li>
                        <li key={4}>
                            <h4>Magic Attack: {creature.statsBase[4]}</h4> 
                        </li>
                        <li key={5}>
                            <h4>Magic Defense: {creature.statsBase[5]}</h4> 
                        </li>
                        <li key={6}>
                            <h4>Speed: {creature.statsBase[6]}</h4> 
                        </li>
                    </ul>
                ) : (
                    <p></p>
                )}

                <h3>Magics: </h3>
                {creature.magics ? (
                    <ul>
                        {creature.magics.map((magic, i) => (
                        <li key={i}>
                            <h4>{creature.magicsLevels[i]}: {magic.name}</h4> 
                        </li>
                    ))}
                    </ul>
                ) : (
                    <p></p>
                )}

                <h3>Posible weapons: </h3>
                {creature.posibleWeapons ? (
                    <ul>
                    {creature.posibleWeapons.map((weapon, i) => (
                        <li key={i}>
                            <h4>{weapon.name}</h4> 
                        </li>
                    ))}
                    </ul>
                ) : (
                    <p></p>
                )}
               
                <h4>EXPERIENCE RATE: {creature.experienceRate}</h4> 
                <h4>MONEY RATE: {creature.moneyRate}</h4> 
                <h4>DESCRIPTION: {creature.description}</h4> 
            </div>
            
        </>
    )
}

export default CreatureDetail;
import React from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"



const Detail = () => {
    const URL = 'https://be-a-rym.up.railway.app/api/character'
    const API_KEY = '99148198607c.3a0dd5cdb1283d5d5ed6'
    const {id} = useParams()

    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`${URL}/${id}?key=${API_KEY}`).then(({ data }) => {
        if (data.name) {
            setCharacter(data);
        } else {
            window.alert('No hay personajes con ese ID');
        }
        });
        return setCharacter({});
    }, [id]);

    return (
        <div>
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name}/>
        </div>
    )
}

export default Detail



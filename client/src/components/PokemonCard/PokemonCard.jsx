import React from "react";
import {NavLink} from 'react-router-dom'
import "./PokemonCard.css"
import * as actions from "../../redux/actions"
import {useDispatch} from "react-redux"

export default function PokemonCard ({name, image, types, id}){

    const dispatch = useDispatch()

    function handleDelete(e){
        id.length > 3 ? 
        dispatch(actions.deletePokemon(e.target.name)) : 
        alert("No se pueden borrar pokemones no creados")
    }

    return (
        <div className="cc-div">
            <button onClick={(e) => handleDelete(e)} name={id}>x</button>
         <NavLink to={`/home/pokemons/${id}`}>
        <h3 className="cc-color cc-h2">{name}</h3>
        </NavLink>
        <img src={image} className="cc-img" alt="img not found"/>   

        <h3>Types: </h3>
        
        
             {
                types && types.map(el => {   
                const type = typeof(el) === "object" ? el.name : el            
                return(
                    <h4 key={type} className="cc-color">{type}</h4>                       
                    )  
                    
                })

             } 
                      
        

        </div>
    )
}
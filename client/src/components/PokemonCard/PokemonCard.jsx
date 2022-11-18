import React from "react";
import {NavLink} from 'react-router-dom'
import "./PokemonCard.css"
import * as actions from "../../redux/actions"
import {useDispatch} from "react-redux"

export default function PokemonCard ({name, image, types, id}){

    const dispatch = useDispatch()

    function handleDelete(e){
        e.preventDefault()      
        dispatch(actions.deletePokemon(e.target.value))       
    }

    return (
        <div className="cc-div">
            {
                id.length > 3 ? <button onClick={(e) => handleDelete(e)} value={id}>x</button> : false
            }
         <NavLink activeClassName="activeCard" to={`/home/pokemons/${id}`}>
        <h3 className="cc-color">{name}</h3>
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
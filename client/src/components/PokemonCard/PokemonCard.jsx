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
        <NavLink className="activeCard" to={`/home/pokemons/${id}`}>
           
        <div >

            {
                id.length > 3 ? <button className="bt-delete" onClick={(e) => handleDelete(e)} value={id}>x</button> : false
            }
        
        <h3 className="cc-color">{name}</h3>        
        <img src={image} className="cc-img" alt="img not found"/>   
        <h3 className="cc-color">Types: </h3>
             
             {
                types && types.map(el => {   
                const type = typeof(el) === "object" ? el.name : el            
                return(
                    <h4 key={type} className="cc-color">{type}</h4>                       
                    )  
                    
                })
             }                         

        </div>     
        </NavLink>
        </div>
    )
}
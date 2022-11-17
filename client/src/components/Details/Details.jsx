import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import * as actions from "../../redux/actions"
import {NavLink} from "react-router-dom"
import "./Details.css"

export default function Details(props){
    
console.log(props)
    const dispatch = useDispatch()
    const myPokemon = useSelector(state => state.details)
    const pokemonId = props.match.params.id
    
    
    useEffect(() => {
        dispatch(actions.detailNull())     
        dispatch(actions.getDetails(pokemonId))
    }, [dispatch,pokemonId])
    
   
    console.log(myPokemon)
    return(

        <div className="cd-div">
            <NavLink to="/home">
            <button>
            volver
            </button>
            </NavLink>
            
        {

            myPokemon.name?
            <div>
            <h3>{myPokemon.id}</h3> 
            <h1>{myPokemon.name}</h1>
            <img src={myPokemon.image} className="img-card" alt="img not found"></img>
            <h2>statistics:</h2>
            <h3>life: {myPokemon.life}</h3>
            <h3>attack: {myPokemon.attack}</h3>
            <h3>defense: {myPokemon.defense}</h3>
            <h3>speed: {myPokemon.speed}</h3>
            <h3>height: {myPokemon.height}</h3>
            <h3>weight: {myPokemon.weight}</h3>
            <h2>Types: {!myPokemon.createdInDb? myPokemon.types + " " : myPokemon.types.map(el => el.name + " ")}</h2>
            
                           
            </div> : <p>Loading...</p>      
        
        }
        
        </div>
    )
}
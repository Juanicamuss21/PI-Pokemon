import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import * as actions from "../../redux/actions"
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

        <div className="total-div">
            
        {

            myPokemon.name?
            <div className="cd-div">
            <h1>{myPokemon.name}</h1>
            <img src={myPokemon.image} className="img-card" alt="img not found"></img>
            <h2>Pokemón stats:</h2>
            <h3>Id: {myPokemon.id}</h3> 
            <h3>Life: {myPokemon.life}</h3>
            <h3>Attack: {myPokemon.attack}</h3>
            <h3>Defense: {myPokemon.defense}</h3>
            <h3>Speed: {myPokemon.speed}</h3>
            <h3>Height: {myPokemon.height}</h3>
            <h3>Weight: {myPokemon.weight}</h3>           
            <h3>Types: {!myPokemon.createdInDb? myPokemon.types + " " : myPokemon.types.map(el => el.name + " ")}</h3>
            
                           
            </div> : <p className="p-loading">Loading...</p>      
        
        }
        
        </div>
    )
}
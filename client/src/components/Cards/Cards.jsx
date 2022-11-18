import React from "react";
import "./Cards.css"
import PokemonCard from "../PokemonCard/PokemonCard";

export default function Cards ({currentPokemons}){
    
    return (
        <div className="Cards-div">
    {
        currentPokemons.length? currentPokemons.map(el => {
            return (
                <PokemonCard name={el.name} image={el.image} types={el.types} id={el.id} key={el.id}></PokemonCard>
            )  
        }) : <p>Cargando Pokemons...</p> 
             
    } 

        </div>
    )
}
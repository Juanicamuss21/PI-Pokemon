import React from "react";
import './Paginated.css'
export default function Paginated({pokemonPerPage, allPokemons, paginated}){

    const pageNumbers = []

    for(let i = 0; i <= Math.floor(allPokemons/pokemonPerPage); i++){
        pageNumbers.push(i+1)
    }


    return(
        <div>
             <nav className="navSearch"> 
             <ul>          
                    {
                        pageNumbers && pageNumbers.map(number => {
                            return(
                                <button 
                                key={number}
                                onClick={() => paginated(number)}>
                                {number}
                                </button>
                            )
                        })
                    }
            </ul>   
                
            </nav>

        </div>
    )
}
import React from "react";
import './Paginated.css'
export default function Paginated({pokemonPerPage, allPokemons, paginated}){

    const pageNumbers = []

    for(let i = 0; i <= Math.floor(allPokemons/pokemonPerPage); i++){
        pageNumbers.push(i+1)
    }


    return(
        <div className="bt-paginated">
              
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

        </div>
    )
}
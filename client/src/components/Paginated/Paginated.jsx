import React from "react";
import './Paginated.css'
// import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import {FcNext, FcPrevious} from "react-icons/fc"

export default function Paginated({pokemonPerPage, allPokemons, paginated, previus, next}){

    const pageNumbers = []

    for(let i = 0; i < Math.ceil(allPokemons/pokemonPerPage); i++){
        pageNumbers.push(i+1)
    }

    return(
        <div className="bt-paginated">

            <button className="button-icon" onClick={() => previus(pageNumbers)}><FcPrevious className="icon-previous"/></button>

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

            <button className="button-icon" onClick={() => next(pageNumbers)}><FcNext className="icon-next"/></button>

        </div>
    )
}
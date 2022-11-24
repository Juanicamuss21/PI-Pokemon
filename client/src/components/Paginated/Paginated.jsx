import React from "react";
import './Paginated.css'
import {GrFormNext, GrFormPrevious} from "react-icons/gr";


export default function Paginated({pokemonPerPage, allPokemons, paginated, previus, next}){

    const pageNumbers = []

    for(let i = 0; i < Math.ceil(allPokemons/pokemonPerPage); i++){
        pageNumbers.push(i+1)
    }

    console.log(pageNumbers.length)


    return(
        <div className="bt-paginated">

            <button onClick={() => previus(pageNumbers)}><GrFormPrevious/>previus</button>

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

            <button onClick={() => next(pageNumbers)}>next<GrFormNext/></button>

        </div>
    )
}
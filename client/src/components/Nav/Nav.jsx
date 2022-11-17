import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"
import * as actions from "../../redux/actions"
import { useDispatch } from "react-redux";

export default function Nav(){

    const dispatch = useDispatch()

    function handleClick(e){
        e.preventDefault()
        dispatch(actions.getAllPokemons())
    }

    return (      
        
        <div className="n-color n-div">
            <img className="img-pokemon" onClick={(e) => handleClick(e)} src="https://www.pngarts.com/files/3/Pokemon-Logo-PNG-Image.png" alt="img-pokemon"></img>              
            <div className="div-navLinks">
                <NavLink to="/Home"><h4 className="n-color n-h4-L">Home</h4></NavLink>
                <NavLink to='/home/createpokemon'><h4 className="n-color n-h4-R">Create Pokemon</h4></NavLink>
            </div>
       </div>
     
    )
}
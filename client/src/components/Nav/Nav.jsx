import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"
import * as actions from "../../redux/actions"
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Nav(){

    const dispatch = useDispatch()

    function handleClick(e){
        e.preventDefault()
        dispatch(actions.getAllPokemons())
    }

    const [name, setName] = useState("")

    function handleInputChange(e){
        e.preventDefault()
        console.log(name)
        setName(e.target.value)
    }

    function handleSubmit(e){  
        dispatch(actions.getPokemonByName(name))   
        setName("")
                
    }

    return (      
        
        <div className="n-div">
            <img className="img-pokemon" onClick={(e) => handleClick(e)} src="https://www.pngarts.com/files/3/Pokemon-Logo-PNG-Image.png" alt="img-pokemon"></img>
            <div className='s-div'>
            <input
             type="text"
             value={name}
             placeholder='Search...'
             onChange={(e) => handleInputChange(e)}
             className="s-input"
            />
            <button className='s-bt1' type='submit' onClick={(e) => handleSubmit(e)}>Search</button>
            </div>  
                        
            <div className="div-navLinks">
                <NavLink exact to="/Home" className="no-active" activeClassName="active">
                    <h4>Home</h4>
                </NavLink>
                <NavLink exact to='/home/createpokemon' className="no-active" activeClassName="active">
                    <h4>Create Pokemon</h4>
                </NavLink>
            </div>
       </div>
     
    )
}
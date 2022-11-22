import React from 'react';
import {NavLink} from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage(){
    return(
        <div className="lp-div">
            <h1 className="lp-h1-p">Welcome to the official Pokemóns page</h1>
                <div>
                    <p className="lp-h1-p">
                    Application where you will be able to search for information on different Pokemons and their types.
                    </p>
                    <NavLink to="/Home">
                        <button type="button" className="lp-bt">Home</button>
                    </NavLink>
                </div>
            </div>
    )
}
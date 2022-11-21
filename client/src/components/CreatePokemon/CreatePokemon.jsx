import React from "react";
import {useDispatch, useSelector} from "react-redux"; 
import * as actions from '../../redux/actions'

import {useState, useEffect} from "react";
import "./CreatePokemon.css"

function validateInput(input) {
    const errors = {};
    if ((!input.name && input.life) || (!input.name && input.attack) || (!input.name && input.defense) || (!input.name && input.speed) || (!input.name && input.height) || (!input.name && input.weight) || (!input.name && input.image)) {
        errors.name = "Se requiere un nombre";
    }
    if ((!input.life && input.attack) || (!input.life && input.defense) || (!input.life && input.speed) || (!input.life && input.height) || (!input.life && input.weight) || (!input.life && input.image)) {
        errors.life = "Campo necesario"       
    } 
    else if (input.life < 1 || input.life > 500 ) {
        if(input.attack){
         errors.life = "Debe ser entre 1 y 500"
        }
    }
    if ((!input.attack && input.defense) || (!input.attack && input.speed) || (!input.attack && input.height) || (!input.attack && input.weight) || (!input.attack && input.image)) {
        errors.attack = "Campo necesario";
    }
    else if (input.attack < 0 || input.attack > 500) {
        if(input.defense){
        errors.attack = "Debe ser entre 1 y 500"
        }
    }
    if ((!input.defense && input.speed) || (!input.defense && input.height) || (!input.defense && input.weight) || (!input.defense && input.image)) {
        errors.defense = "Campo necesario"
    }
    else if (input.defense < 0 || input.defense > 500) {
        if(input.speed){
        errors.defense = "Debe ser entre 1 y 500"
        }
    }
    if ((!input.speed && input.height) || (!input.speed && input.weight) || (!input.speed && input.image)) {
        errors.speed = "Campo necesario"
    }
    else if (input.speed < 0 || input.speed > 500) {
        if(input.height){
        errors.speed = "Debe ser entre 1 y 500"
        }
    }
    if ((!input.height && input.weight) || (!input.height && input.image)) {
        errors.height = "Campo necesario"
    }
    else if (input.height < 0 || input.height > 500) {
        if(input.weight){
        errors.height = "Debe ser entre 1 y 500"
        }
    }
    if ((!input.weight && input.image)) {
        errors.weight = "Campo necesario"
    }
    else if (input.weight < 0 || input.weight > 500) {
        if(input.image){
        errors.weight = "Debe ser entre 1 y 500"
        }
    }
    if(input.types.length === 0){
        errors.types = "elige al menos un tipo"
    }
    return errors;
}

export default function CreatePokemon(){

    const dispatch = useDispatch();
    const allTypes = useSelector(state => state.allTypes)

    // const history = useHistory()

    const [input, setInput] = useState({
        name: "",
        life: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        image: "",
        types: []
    })

    const [error, setError] = useState({})

    useEffect(() => {
        dispatch(actions.getAllTypes())
    },[dispatch])

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setError(validateInput({
            ...input,
            [e.target.name] : e.target.value
        }))
        console.log(input)
    }

    function handleSelect(e){
        setInput({
            ...input,
            types: [...input.types,e.target.value]
        })
        console.log(input)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!input.name || !input.life || !input.attack || !input.defense || !input.speed || !input.height || !input.weight){
            return alert('Complete los campos requeridos antes de enviarlo')
        }
        if (error.name || error.life || error.attack || error.defense || error.speed || error.height || error.weight) {
            return alert('Complete correctamente el formulario antes de enviarlo')
        }
        if(input.types.length === 0){
            return alert("elige al menos un tipo")
        }
        dispatch(actions.postPokemons(input))
        setInput({
            name: "",
            life: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            image: "",
            types: []
        })
        alert("Pokemon creado")
        // history.push('/home')
    }

    function handleDelete(e) {   
        setInput({
            ...input,
            types: input.types.filter(type => type !== e)
        })
    }

    return(
        <div className="input-type">
            <div className="div-form">
            <h1>Crea aquí tu Pokemón!</h1>
            <form>
                <div className="input-type__input">
                    <label>Name: </label>
                    <input
                    type="text"
                    value={input.name}
                    name="name"
                    onChange={(e) => handleChange(e)}
                    />
                    {error.name && (<p className="errors">{error.name}</p>)}        
                </div>
                <div className="input-type__input">
                    <label>Life: </label>
                    <input
                    type="number"
                    value={input.life}
                    name="life"
                    onChange={(e) => handleChange(e)}
                    />
                    {error.life && (<p className="errors">{error.life}</p>)}
                </div>
                <div className="input-type__input">
                    <label>Attack: </label>
                    <input
                    type="number"
                    value={input.attack}
                    name="attack"
                    onChange={(e) => handleChange(e)}
                    />   
                    {error.attack && (<p className="errors">{error.attack}</p>)}              
                </div>
                <div className="input-type__input">
                    <label>Defense: </label>
                    <input
                    type="number"
                    value={input.defense}
                    name="defense"
                    onChange={(e) => handleChange(e)}
                    />  
                    {error.defense && (<p className="errors">{error.defense}</p>)}                    
                </div>
                <div className="input-type__input">
                    <label>Speed:</label>
                    <input
                    type="number"
                    value={input.speed}
                    name="speed"
                    onChange={(e) => handleChange(e)}
                    />
                    {error.speed && (<p className="errors">{error.speed}</p>)}                   
                </div>
                <div className="input-type__input">
                    <label>Height:</label>
                    <input
                    type="number"
                    value={input.height}
                    name="height"
                    onChange={(e) => handleChange(e)}
                    />   
                    {error.height && (<p className="errors">{error.height}</p>)}                  
                </div>
                <div className="input-type__input">
                    <label>Weight:</label>
                    <input
                    type="number"
                    value={input.weight}
                    name="weight"
                    onChange={(e) => handleChange(e)}
                    />    
                    {error.weight && (<p className="errors">{error.weight}</p>)}               
                </div>
                <div className="input-type__input">
                    <label>Image:</label>
                    <input
                    type="text"
                    value={input.image}
                    name="image"
                    onChange={(e) => handleChange(e)}
                    />                   
                </div>
                <div className="input-type__input">
                <label>Type of pokemon: </label>
                <select onChange={(e) => handleSelect(e)}> 
                                
                    {   
                        allTypes.map(type => {
                        return(
                        <option key={type.id} value={type.name}>{type.name}</option>                      
                        )})                       
                    }
                    {error.type && (<p className="errors">{error.type}</p>)}
                </select>               
                </div>
                
                {
                        input.types.map(el => {
                            return <div key={el}>
                                <button onClick={() => handleDelete(el)} className="ca-bt-delete">x</button>
                                <p className="ca-p-delete">{el}</p>
                            </div>
                        })
                        
                }

                <button type="submit" className="bt-create" onClick={(e) => handleSubmit(e)}>Crear Pokemon</button>
                
            </form>
            </div>
        </div>
    )
}
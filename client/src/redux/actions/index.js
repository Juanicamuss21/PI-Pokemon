import axios from 'axios'

export function getAllPokemons(){
    return async function(dispatch){
        try{
            const pokemons = await axios.get("http://localhost:3001/pokemons")

            return dispatch({type: "GET_ALL_POKEMONS", payload: pokemons.data})
        }catch(error){
            console.log(error.message)
        }
    }
} 

export function getPokemonByName(name){
    return async function(dispatch){
        try{
            const pokemonName = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
            return dispatch({type: "GET_POKEMON_BY_NAME", payload: pokemonName.data})
        }catch(error){
            alert("El Pokemón no existe")
        }
    }
}

export function getDetails(id){
    return async function(dispatch){
        try{
            const details = await axios.get(`http://localhost:3001/pokemons/${id}`)
            return dispatch({type: "GET_DETAILS", payload: details.data})
        }catch(error){
            console.log(error.message)
        }
    }
} 

export function getAllTypes(){
    return async function(dispatch){
        try{
            const types = await axios.get("http://localhost:3001/types")

            return dispatch({type: "GET_ALL_TYPES", payload: types.data})
        }catch(error){
            console.log(error.message)
        }
    }
}

export function postPokemons(post){
    return async function(dispatch){
        try{
            const response = await axios.post("http://localhost:3001/pokemons", post)

            return dispatch({type: "POST_POKEMON", payload: response.data})
        }catch(error){
            console.log(error.message)
        }
    }
}


export function filterByOrder(value){
    return {
        type: "FILTER_BY_ORDER",
        payload: value
    }
}

export function filterByAttack(value){
    return {
        type: "FILTER_BY_ATTACK",
        payload: value
    }
}

export function filterByType(value){
    return {
        type: "FILTER_BY_TYPE",
        payload: value   
    }
}

export function filterByCreated(value){
    return {
        type: "FILTER_BY_CREATED",
        payload: value   
    }
}

export function deletePokemon(id){
    return async function(dispatch){
        try{
            await axios.get(`http://localhost:3001/delete/${id}`)
            return dispatch({type: "DELETE_POKEMON", payload: id})
        }catch(error){
            console.log(error.message)
        }
    }
}

export function detailNull(){
    return {
        type: "DETAIL_NULL",   
    }
}



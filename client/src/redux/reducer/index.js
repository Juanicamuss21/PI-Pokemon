
const initialState = {
    allPokemons : [],
    pokemons: [],
    allTypes: [],
    details: {}
}


function rootReducer(state=initialState, action){
    switch(action.type){
        case "GET_ALL_POKEMONS" : 
        return {
            ...state,
            allPokemons: action.payload,
            pokemons: action.payload,
        }

        case "GET_POKEMON_BY_NAME" : 
        return {
            ...state,
            allPokemons: action.payload
        }

        case "GET_DETAILS" : 
        return {
            ...state,
            details: action.payload
        }

        case "GET_ALL_TYPES" : 
        return {
            ...state,
            allTypes: action.payload
        }

        case "POST_POKEMON" : 
        return {
            ...state
        }

        case "FILTER_BY_ORDER" :
         const pokemons1 = state.pokemons 
               
         const arrSort = action.payload === "asc"?
         pokemons1.sort(function(a,b){
            if(a.name > b.name){
                return 1
            }
            if(a.name < b.name){
                return -1
            }
            return 0
         }) : 
         pokemons1.sort(function(a,b){
            if(a.name > b.name){
                return -1
            }
            if(a.name < b.name){
                return 1
            }
            return 0
         })

        return {
            ...state,
            allPokemons: arrSort
        }

        case "FILTER_BY_ATTACK" :
         const pokemons2 = state.pokemons 
         const attackFiltered = action.payload === "biggest"?
         pokemons2.sort(function(a,b){
            if(a.attack > b.attack){
                return -1
            }
            if(a.attack < b.attack){
                return 1
            }
            return 0
         }) : 
         pokemons2.sort(function(a,b){
            if(a.attack > b.attack){
                return 1
            }
            if(a.attack < b.attack){
                return -1
            }
            return 0
         })

        return {
            ...state,
            allPokemons: attackFiltered
        }
        
        case "FILTER_BY_TYPE" :
            const pokemons3 = state.pokemons            
            const types = action.payload === "all" ? pokemons3 : pokemons3.filter(e => {
                for(let i = 0; i < e.types.length ; i++){
                    let type = e.types[i].name
                    let type2 = e.types[i]
                    if(type !== undefined){
                        if(action.payload === type){
                            return true
                    }}
                    else{
                       if(action.payload === type2){
                        return true 
                    } 
                }}
                return false
            })

           if(!types.length){
                alert("No hay Pokemóns de este tipo aún")
            }
                         
        return {
            ...state,
            allPokemons: types.length? types : pokemons3     
        }

        case "FILTER_BY_CREATED" :
            const pokemons4 = state.pokemons
            const createdFiltered = action.payload === "created"? pokemons4.filter(el => el.createdInDb) : pokemons4
            if(!createdFiltered.length){
            alert("No hay Pokemons creados aún")
            }
        return {
            ...state,
            allPokemons: createdFiltered.length? createdFiltered : pokemons4
        }

        case "DELETE_POKEMON":
            const pokemons5 = state.pokemons
            return{
                ...state,
                allPokemons: pokemons5.filter(e => e.id !== action.payload)
        }

        case "DETAIL_NULL" : 
        return {
            ...state,
            details: []
        }

        default :
        return {
            ...state
        }
    }
}

export default rootReducer
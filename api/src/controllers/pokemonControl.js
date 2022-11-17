const axios = require('axios')
const {Pokemon, Type} = require('../db')

const getInfoApi = async () => {
    const apiPokemon = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")

    const dataApiPokemon = apiPokemon.data.results.map(el => axios.get(el.url))  
    
    const responseApi = await axios.all(dataApiPokemon)

    const dataFromApi = responseApi?.map(pokemon => {
        return {
            id: pokemon.data.id,
            name: pokemon.data.name,
            life:pokemon.data.stats[0].base_stat,
            attack: pokemon.data.stats[1].base_stat,
            defense: pokemon.data.stats[2].base_stat,
            speed: pokemon.data.stats[5].base_stat,
            height: pokemon.data.height,
            weight: pokemon.data.weight,
            types: pokemon.data.types.map(t => t.type.name),
            image: pokemon.data.sprites.other["official-artwork"]["front_default"]

        }
    })

    return dataFromApi
   


}  

const getInfoDb = async () => {
    return await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
};

const getAllInfo = async() => {
    const infoApi = await getInfoApi()
    const infoDb = await getInfoDb()
    const allInfo = infoApi.concat(infoDb)
    return allInfo
}
    

module.exports = {getAllInfo} 
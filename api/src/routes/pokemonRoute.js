const express = require('express')
const router = express.Router()

const {getAllInfo} = require('../controllers/pokemonControl')
const {Pokemon, Type} = require('../db')

router.get('/pokemons', async (req, res) => {
    try{
        const {name} = req.query;
        const dataPokemon = await getAllInfo()
        if(name){
            const pokemonName = await dataPokemon.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
            pokemonName.length ?
            res.status(200).send(pokemonName) :
            res.status(400).send("No se encontro el pokemon")
        }
        else{
        res.status(200).send(dataPokemon)
        }
    }catch(error){
        res.status(400).send(error)
    }
});

router.get('/pokemons/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const dataPokemon = await getAllInfo()
        if(id){
            let pokemonId = id.length > 3 ? await dataPokemon.find(el => el.id === id) : await dataPokemon.find(el => el.id === parseInt(id))
            
            pokemonId ? 
            res.status(200).send(pokemonId) : 
            res.status(400).send("No existe")
        }      
    }catch(error){
        res.status(400).send(error)
    }
});

router.post('/pokemons', async (req, res) => {
    try{
        const {name, life, attack, defense, speed, height, weight,image, types} = req.body
        
        const pokemonCreated = await Pokemon.create({
            name,
            life,
            attack,
            defense,
            speed,
            height,
            weight,
            image
        })
        const findTypeInDb = await Type.findAll({
            where: {name: types}
        })

        pokemonCreated.addType(findTypeInDb)

        const newPokemon = await Pokemon.findOne({
            where: {name: name},
            include: {model: Type}
           })

        res.status(200).send(newPokemon)

    }catch(error){
        res.status(404).send(`Error: ${error}`)
    }
})

router.get('/delete/:id', async(req, res) => {
    try{
        const {id} = req.params
        const deletePokemon = await Pokemon.destroy({
            where: {id: id},
            include: {model: Type}
           })
           res.send("borrado con exito")

    }catch(error){
        res.status(404).send(`Error: ${error.message}`)
    }
});

module.exports = router
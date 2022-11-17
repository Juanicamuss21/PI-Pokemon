const express = require('express')
const router = express.Router()

const {getInfoApiType} = require('../controllers/types')
const {Pokemon, Type} = require('../db')

router.get('/types',async (req,res) => {
    try{
    const getTypes = await getInfoApiType()
    res.status(200).send(getTypes)

    }catch(error){
    res.status(404).send(error.message)   
    }
})

module.exports = router
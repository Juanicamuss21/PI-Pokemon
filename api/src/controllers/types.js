const axios = require('axios')
const {Pokemon, Type} = require('../db')

const getInfoApiType = async () => {
    const apiTypes = await axios.get("https://pokeapi.co/api/v2/type")

    const dataApiTypes = apiTypes.data.results.map(type => type.name)         
        

    dataApiTypes.forEach(async el => {
        await Type.findOrCreate({
              where: {name: el}
          })
      });

      const allTypes = await Type.findAll();
        return allTypes;

}  

module.exports = {getInfoApiType}
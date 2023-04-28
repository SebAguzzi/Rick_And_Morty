const URL = 'https://rickandmortyapi.com/api/character';
const axios = require('axios');

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios(`${URL}/${id}`)

        if(!data.name) throw new Error ('Not found')

        const character = {
            id: data.id,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender,
            status: data.status
        }
        
        return res.status(200).json(character)
    
        } catch (error) {
        res.status(500).json({ error: error.message }); // O .send(error.message)
    }    
};


module.exports = {
    getCharById
};
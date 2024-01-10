const {Genre} = require('../models/models')
const ApiError = require('../error/ApiError')

class GenreController {
    async create(req, res) {
        try {
            const {id, name, description} = req.body
            const genre = await Genre.create({id, name, description})
            
            return res.json(genre)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const genres = await Genre.findAll()
        return res.json(genres)
    }

    async getOne(req, res) {

    }
}

module.exports = new GenreController()
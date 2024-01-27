const {Film} = require('../models/models')
const ApiError = require('../error/ApiError')

class FilmController {
    async create(req, res, next) {
        try {
            const {id, name, genre_id, description, duration, release_date} = req.body
            const film = await Film.create({id, name, genre_id, description, duration, release_date})
            
            return res.json(film)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const films = await Film.findAll()
        return res.json(films)
    }

    async getOne(req, res) {

    }
}

module.exports = new FilmController()
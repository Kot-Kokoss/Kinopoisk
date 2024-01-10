const {Film} = require('../models/models')
const ApiError = require('../error/ApiError')

class FilmController {
    async create(req, res) {
        try {
            const {id, name, genre_id, description, duration, release_date, format_id, faces_id, nominations_id, awards_id} = req.body
            const film = await Faces.create({id, name, genre_id, description, duration, release_date, format_id, faces_id, nominations_id, awards_id})
            
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
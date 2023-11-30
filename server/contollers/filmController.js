const {Film} = require('../models/models')
const ApiError = require('../error/ApiError')

class FilmController {
    async create(req, res) {
        const {name} = req.body
        const film = await Film.create({name})
        return res.json(film)
    }

    async getAll(req, res) {

    }

    async getOne(req, res) {

    }
}

module.exports = new FilmController()
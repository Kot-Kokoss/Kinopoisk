const {Position} = require('../models/models')
const ApiError = require('../error/ApiError')

class PositionController {
    async create(req, res) {
        try {
            const {id, name, description} = req.body
            const position = await Position.create({id, name, description})
            
            return res.json(position)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const positions = await Position.findAll()
        return res.json(positions)
    }

    async getOne(req, res) {

    }
}

module.exports = new PositionController()
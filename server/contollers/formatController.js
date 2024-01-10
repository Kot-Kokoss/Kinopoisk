const {Format} = require('../models/models')
const ApiError = require('../error/ApiError')

class FormatController {
    async create(req, res) {
        try {
            const {id, name, description} = req.body
            const format = await Format.create({id, name, description})
            
            return res.json(format)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const formats = await Format.findAll()
        return res.json(formats)
    }

    async getOne(req, res) {

    }
}

module.exports = new FormatController()
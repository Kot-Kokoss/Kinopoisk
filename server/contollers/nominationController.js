const {Nomination} = require('../models/models')
const ApiError = require('../error/ApiError')

class NominationController {
    async create(req, res) {
        try {
            const {id, name, description, nomination_date} = req.body
            const nomination = await Nomination.create({id, name, description, nomination_date})
            
            return res.json(nomination)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const nominations = await Nomination.findAll()
        return res.json(nominations)
    }
}

module.exports = new NominationController()
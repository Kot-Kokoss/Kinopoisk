const {Award} = require('../models/models')
const ApiError = require('../error/ApiError')

class AwardController {
    async create(req, res) {
        try {
            const {id, name, description, award_date} = req.body
            const award = await Award.create({id, name, description, award_date})
            
            return res.json(award)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const awards = await Award.findAll()
        return res.json(awards)
    }
}

module.exports = new AwardController()
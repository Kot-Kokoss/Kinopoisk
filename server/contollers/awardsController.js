const {Awards} = require('../models/models')
const ApiError = require('../error/ApiError')

class AwardsController {
    async create(req, res) {
        try {
            const {id, name, description, award_date, nomination_id, films_id, faces_id} = req.body
            const award = await Awards.create({id, name, description, award_date, nomination_id, films_id, faces_id})
            
            return res.json(award)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const awards = await Awards.findAll()
        return res.json(awards)
    }
}

module.exports = new AwardsController()
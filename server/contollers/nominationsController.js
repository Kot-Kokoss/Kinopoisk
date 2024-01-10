const {Nominations} = require('../models/models')
const ApiError = require('../error/ApiError')

class NominationsController {
    async create(req, res) {
        try {
            const {id, name, description, nomination_date, award_id, films_id, faces_id} = req.body
            const nomination = await Nominations.create({id, name, description, nomination_date, award_id, films_id, faces_id})
            
            return res.json(nomination)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const nominations = await Nominations.findAll()
        return res.json(nominations)
    }
}

module.exports = new NominationsController()
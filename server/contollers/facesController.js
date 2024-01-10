const uuid = require('uuid')
const path = require('path')
const {Faces} = require('../models/models')
const ApiError = require('../error/ApiError')

class FacesController {
    async create(req, res, next) {
        try {
            const {id, name, birth, position_id, projects_id, nominations_id, awards_id} = req.body
            const {photo_link} = req.files
    
            let fileName = uuid.v4() + ".jpg"
            photo_link.mv(path.resolve(__dirname, '..', 'static', fileName))
    
            const face = await Faces.create({id, name, birth, photo_link: fileName, position_id, projects_id, nominations_id, awards_id})
            
            return res.json(face)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req, res) {
        const faces = await Faces.findAll()
        return res.json(faces)
    }
    async getOne(req, res) {

    }
}

module.exports = new FacesController()
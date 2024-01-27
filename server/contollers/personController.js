const uuid = require('uuid')
const path = require('path')
const {Person} = require('../models/models')
const ApiError = require('../error/ApiError')

class PersonController {
    async create(req, res, next) {
        try {
            const {id, name, birth} = req.body
            const {photo_link} = req.files
    
            let fileName = uuid.v4() + ".jpg"
            photo_link.mv(path.resolve(__dirname, '..', 'static', fileName))
    
            const person = await Person.create({id, name, birth, photo_link: fileName})
            
            return res.json(person)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req, res) {
        const persons = await Person.findAll()
        return res.json(persons)
    }
    async getOne(req, res) {

    }
}

module.exports = new PersonController()
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models');

// const generateJwt = (id, email, role) => {
//     jwt.sign(
//         {id, email, role},
//         process.env.SECRET_KEY,
//         {expiresIn: '24h'}
//         )
// }

class UserController {
    
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        // const token = generateJwt(user.id, user.email, user.role)
        const token = jwt.sign(
            {id: user.id, email: user.email, role: user.role},
            process.env.SECRET_KEY,
            {expiresIn: '24h'}
            )
        return res.json(token)
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.badRequest('Пользователь с таким email не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.badRequest('Указан неверный password'))
        }
        const token = jwt.sign(
            {id: user.id, email: user.email, role: user.role},
            process.env.SECRET_KEY,
            {expiresIn: '24h'}
            )
        
        return res.json({token})
    }

    async check(req, res, next) {
        const token = jwt.sign(
            {id: req.user.id, email: req.user.email, role: req.user.role},
            process.env.SECRET_KEY,
            {expiresIn: '24h'}
            )
        return res.json({token})
    }
}

module.exports = new UserController()
const sequelize = require('../db');
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING,unique: true, allowNull: false}    
})

const Film = sequelize.define('film', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING,unique: true, allowNull: false},
    genre: {type: DataTypes.STRING, allowNull: false},    
    duration: {type: DataTypes.STRING, allowNull: false},
    release_date: {type: DataTypes.DATE, allowNull: false},
    format: {type: DataTypes.STRING, allowNull: false},
    faces_id: {type: DataTypes.INTEGER, allowNull: false},
    nominations_id: {type: DataTypes.INTEGER, allowNull: false},
    awards_id: {type: DataTypes.INTEGER, allowNull: false}
})

const Faces = sequelize.define('faces', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    photo_link: {type: DataTypes.STRING, unique: true, allowNull: false},
    position: {type: DataTypes.STRING, unique: false, allowNull: false},
    projects_id: {type: DataTypes.STRING, unique: false, allowNull: false},
    nominations_id: {type: DataTypes.INTEGER, allowNull: true},
    awards_id: {type: DataTypes.INTEGER, allowNull: true}
})

const Nominations = sequelize.define('nominations', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING,unique: true, allowNull: false},
    nomination_date: {type: DataTypes.DATE, allowNull: false},
    award_id: {type: DataTypes.INTEGER, allowNull: false},
    films_id: {type: DataTypes.INTEGER, allowNull: false},
    faces_id: {type: DataTypes.INTEGER, allowNull: false}   
})

const Awards = sequelize.define('awards', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING,unique: true, allowNull: false},
    award_date: {type: DataTypes.DATE, allowNull: false},
    nomination_id: {type: DataTypes.INTEGER, allowNull: false},
    films_id: {type: DataTypes.INTEGER, allowNull: false},
    faces_id: {type: DataTypes.INTEGER, allowNull: false}
})

const FilmFaces = sequelize.define('film_faces', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
})

const FilmNominations = sequelize.define('film_nominations', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
})

const FacesNominations = sequelize.define('faces_nominations', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
})

//connection

Film.belongsToMany(Faces, {through: FilmFaces})
Faces.belongsToMany(Film, {through: FilmFaces})

Film.belongsToMany(Nominations, {through: FilmNominations})
Nominations.belongsToMany(Film, {through: FilmNominations})

Film.hasMany(Awards)
Awards.belongsTo(Film)

Faces.belongsToMany(Nominations, {through: FacesNominations})
Nominations.belongsToMany(Faces, {through: FacesNominations})

Faces.hasMany(Awards)
Awards.belongsTo(Faces)

Nominations.hasOne(Awards)
Awards.belongsTo(Nominations)

module.exports = {
    User,
    Film,
    Faces,
    Nominations,
    Awards,
    FilmFaces,
    FilmNominations,
    FacesNominations
}
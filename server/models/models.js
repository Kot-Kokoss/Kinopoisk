const sequelize = require('../db');
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING,unique: true, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: "USER"}    
})

const Film = sequelize.define('film', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    genre_id: {type: DataTypes.INTEGER, allowNull: false},
    description: {type: DataTypes.TEXT,unique: true},
    duration: {type: DataTypes.INTEGER, allowNull: false},
    release_date: {type: DataTypes.DATE},
    format_id: {type: DataTypes.INTEGER, allowNull: false},
    faces_id: {type: DataTypes.INTEGER, allowNull: false},
    nominations_id: {type: DataTypes.INTEGER},
    awards_id: {type: DataTypes.INTEGER}
})

const Genre = sequelize.define('genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING,unique: true, allowNull: false}  
})

const Format = sequelize.define('format', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING,unique: true, allowNull: false}  
})

const Faces = sequelize.define('faces', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    birth: {type: DataTypes.STRING, unique: false, allowNull: false},
    photo_link: {type: DataTypes.STRING, unique: true},
    position_id: {type: DataTypes.INTEGER, unique: true, allowNull: false},
    projects_id: {type: DataTypes.STRING, unique: false, allowNull: false},
    nominations_id: {type: DataTypes.INTEGER},
    awards_id: {type: DataTypes.INTEGER}
})

const Position = sequelize.define('position', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.TEXT, unique: true}  
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

const FilmGenre = sequelize.define('film_genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
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

const FacesPosition = sequelize.define('faces_position', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
})

//connection

Film.belongsToMany(Genre, {through: FilmGenre})
Genre.belongsToMany(Film, {through: FilmGenre})

Film.belongsToMany(Faces, {through: FilmFaces})
Faces.belongsToMany(Film, {through: FilmFaces})

Film.belongsToMany(Nominations, {through: FilmNominations})
Nominations.belongsToMany(Film, {through: FilmNominations})

Format.hasMany(Film)
Film.belongsTo(Format)

Film.hasMany(Awards)
Awards.belongsTo(Film)

Faces.belongsToMany(Nominations, {through: FacesNominations})
Nominations.belongsToMany(Faces, {through: FacesNominations})

Faces.belongsToMany(Position, {through: FacesPosition})
Position.belongsToMany(Faces, {through: FacesPosition})

Faces.hasMany(Awards)
Awards.belongsTo(Faces)

Nominations.hasOne(Awards)
Awards.belongsTo(Nominations)

module.exports = {
    User,
    Film,
    Genre,
    Format,
    Faces,
    Position,
    Nominations,
    Awards,
    FilmGenre,
    FilmFaces,
    FilmNominations,
    FacesNominations,
    FacesPosition
}
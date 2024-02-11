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
    description: {type: DataTypes.TEXT, unique: true},
    duration: {type: DataTypes.INTEGER, allowNull: false},
    release_date: {type: DataTypes.DATE}
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

const Person = sequelize.define('person', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    birth: {type: DataTypes.STRING, unique: false, allowNull: false},
    photo_link: {type: DataTypes.STRING, unique: true}
})

const Position = sequelize.define('position', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.TEXT, unique: true}  
})

const Nomination = sequelize.define('nomination', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING,unique: true, allowNull: false},
    nomination_date: {type: DataTypes.DATE, allowNull: false}
})

const Award = sequelize.define('award', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING,unique: true, allowNull: false},
    award_date: {type: DataTypes.DATE, allowNull: false}
})

const FilmGenre = sequelize.define('film_genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
})

const FilmPerson = sequelize.define('film_person', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
})

const FilmNomination = sequelize.define('film_nomination', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
})

const FilmFormat = sequelize.define('film_format', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
})

const PersonNomination = sequelize.define('person_nomination', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
})

const PersonPosition = sequelize.define('person_position', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
})

//connection

Film.belongsToMany(Genre, {through: FilmGenre})
Genre.belongsToMany(Film, {through: FilmGenre})

Film.belongsToMany(Person, {through: FilmPerson})
Person.belongsToMany(Film, {through: FilmPerson})

Film.belongsToMany(Nomination, {through: FilmNomination})
Nomination.belongsToMany(Film, {through: FilmNomination})

Format.hasMany(Film)
Film.belongsTo(Format)

Film.hasMany(Award)
Award.belongsTo(Film)

Person.belongsToMany(Nomination, {through: PersonNomination})
Nomination.belongsToMany(Person, {through: PersonNomination})

Person.belongsToMany(Position, {through: PersonPosition})
Position.belongsToMany(Person, {through: PersonPosition})

Person.hasMany(Award)
Award.belongsTo(Person)

Nomination.hasOne(Award)
Award.belongsTo(Nomination)

module.exports = {
    User,
    Film,
    Genre,
    Format,
    Person,
    Position,
    Nomination,
    Award,
    FilmGenre,
    FilmPerson,
    FilmNomination,
    PersonNomination,
    PersonPosition
}
import {makeAutoObservable} from "mobx";

export default class finder {
    constructor() {
        this._person = []
        this._positions = []
        this._nominations = []
        this._awards = []
        this._films = []
        this._formats = []
        this._genres = []

        makeAutoObservable(this)
    }
    
    setFaces(persons) {
       this._persons = persons 
    }
    setPositions(positions) {
        this._positions = positions 
    }
    setNominations(nominations) {
        this._nominations = nominations 
    }
    setAwards(awards) {
        this._awards = awards 
    }
    setFilms(films) {
        this._films = films
    }
    setFormats(formats) {
        this._formats = formats 
    }
    setGenres(genres) {
        this._genres = genres 
    }

    get Persons() {
        return this._persons
    }
    get Positions() {
        return this._positions
    }
    get Nominations() {
        return this._nominations
    }
    get Awards() {
        return this._awards 
    }
    get Films() {
        return this._films
    }
    get Formats() {
        return this._formats
    }
    get Genres() {
        return this._genres 
    }
}
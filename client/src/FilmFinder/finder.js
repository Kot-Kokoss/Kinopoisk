import {makeAutoObservable} from "mobx";

export default class finder {
    constructor() {
        this._faces = [
            {"id": 1,
            "name": "Дуэйн Дуглас Джонсон",
            "birth": "12",
            "photo_link": "e67d6621-58e8-48fb-b728-4efa7b713273.jpg",
            "position_id": 2,
            "projects_id": "3",
            "nominations_id": 10,
            "awards_id": 32,
            "createdAt": "2024-01-09T16:32:15.241Z",
            "updatedAt": "2024-01-09T16:32:15.241Z"}
        ]
        this._positions = []
        this._nominations = []
        this._awards = []
        this._films = []
        this._formats = []
        this._genres = []

        makeAutoObservable(this)
    }
    
    setFaces(faces) {
       this._faces = faces 
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

    get Faces() {
        return this._faces
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
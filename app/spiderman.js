class Spiderman {

    constructor( name, age, filmStudio, films ){
        this.name = name
        this.age = age
        this.filmStudio = filmStudio
        this.films = films
    }

    getInfo(){
        return `Hey, I'm ${ this.name } from ${ this.filmStudio }`
    }

}

module.exports = Spiderman
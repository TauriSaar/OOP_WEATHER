class LS {
    constructor() {
        this.deafaoultCity = 'Tallinn'
        this.city
    }

    getCity(){
        if (localStorage.getItem('city') === null){
            this.city = this.deafaoultCity
        } else {
            this.city = localStorage.getItem('city')
        }
        return this.city
    }

    setCity(city){
        localStorage.setItem('city', city)
    }
}
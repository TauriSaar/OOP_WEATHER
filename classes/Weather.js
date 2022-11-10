class Weather{
    constructor(city) {
        this.city = city
        this.key = '0c3dbc7c9707de0a34bae0310dd79aa5'
    }

    async getWeather(){
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responceData = await responce.json()
        return responceData
    }
}
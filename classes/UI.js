class UI {
    constructor() {
        this.description =  document.querySelector('#description')
        this.temp = document.querySelector('#temp')
        this.city = document.querySelector('#location')
        this.icon = document.getElementById('icon')
    }
    drawWeather(data) {
        var celcius = Math.round(parseFloat(data.main.temp) - 273.15)
        var description = data.weather[0].description;

        this.description.innerHTML = description;
        this.temp.innerHTML = celcius + '&deg;';
        this.city.innerHTML = data.name;
        this.icon.innerHTML = icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png` ;
    }
}
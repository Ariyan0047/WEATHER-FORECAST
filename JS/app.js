const form = document.querySelector(".form-group")
const card = document.querySelector(".card")
const details = document.querySelector(".details")
const vdo = document.querySelector(".vdo")

const gettingData = async (cityName) => {
    const cityDetails = await getCityInfo(cityName)
    const weatherDetails = await getWeatherCondition(cityDetails.Key)

    return {
        cityDetails,
        weatherDetails
    }
}



const updateUi = (data) => {
    const cityDetails = data.cityDetails
    const weatherDetails = data.weatherDetails

    let isDayTime = "DAY";
    if (weatherDetails.IsDayTime) {
        isDayTime
    } else {
        isDayTime = "NIGHT"
    }

    // UPDATING THE DOM
    details.innerHTML = `
    <div class="card-body text-center details">
        <h4 class="card-title">${cityDetails.EnglishName}</h4>
        <h4 class="card-title">${cityDetails.Country.EnglishName}</h4>
        <h4 class="card-title">${isDayTime}</h4>
        <h4 class="card-title">${weatherDetails.WeatherText}</h4>
        <div class="card-text">
            <span>temp : ${weatherDetails.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    </div>`

    // UPDATING VIDEO BACKGROUND 
    let vdoSrc = "VIDEOS/sunny.mp4"
    if (weatherDetails.IsDayTime !== true && (weatherDetails.WeatherText === "Mostly Cloudy" || weatherDetails.WeatherText === "Cloudy" || weatherDetails.WeatherText === "OverCast")) {
        vdoSrc = "VIDEOS/night.mp4"
    } else if (weatherDetails.IsDayTime !== true && weatherDetails.WeatherText === "Rainy") {
        vdoSrc = "VIDEOS/thunderstrom.mp4"
    } else if (weatherDetails.IsDayTime === true && weatherDetails.WeatherText === "Clear") {
        vdoSrc
    } else if (weatherDetails.IsDayTime === true && (weatherDetails.WeatherText === "Mostly Cloudy" || weatherDetails.WeatherText === "Cloudy" || weatherDetails.WeatherText === "OverCast")) {
        vdoSrc = "VIDEOS/cloudy.mp4"
    } else if (weatherDetails.IsDayTime === true && weatherDetails.WeatherText === "Rainy") {
        vdoSrc = "VIDEOS/rainy.mp4"
    } else {
        vdoSrc
    }
    vdo.setAttribute('src', vdoSrc)

}

const getUserInput = (event) => {
    event.preventDefault()
    const userInput = document.querySelector("#city")
    const cityName = userInput.value.trim().toLowerCase()
    form.reset()

    // UPDATING CITY NAME
    gettingData(cityName)
        .then(data => {
            updateUi(data)
            console.log(data)
        })
        .catch(error => console.log(error))
}


form.addEventListener("submit", getUserInput)
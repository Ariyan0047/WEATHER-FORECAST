const form = document.querySelector(".form-group")
const card = document.querySelector(".card")
const detail = document.querySelector(".details")

const gettingData = async (cityName) => {
    const cityDetails = await getCityInfo(cityName)
    const weatherDetails = await getWeatherCondition(cityDetails.Key)

    return {
        cityDetails,
        weatherDetails
    }
}



const updateUi = (data) => {

}

const getUserInput = (event) => {
    event.preventDefault()
    const userInput = document.querySelector("#city")
    const cityName = userInput.value.trim().toLowerCase()
    form.reset()

    // UPDATING CITY NAME
    gettingData(cityName)
        .then(data => updateUi(data))
        .catch(error => console.log(error))
}


form.addEventListener("submit", getUserInput)
const apiKey = "tNnx8QJPdQZgWyeoOUbhPLeYgFq6rifn"

// const currentCondition = "http://dataservice.accuweather.com/currentconditions/v1/{locationKey}"

// GETTING CITY INFORMATION FROM ACCU WEATHER
const getCityInfo = async (cityName) => {
    const countryKey = `http://dataservice.accuweather.com/locations/v1/cities/search`
    const query = `?apikey=${apiKey}&q=${cityName}`
    const response = await fetch(countryKey + query)
    if (response.status !== 200) {
        alert("COUNTRY NAME INCORRECT !!!!!!!!!!!!!")
    }
    const data = await response.json()
    return data[0]
}

// GETTING CITY WEATHER CONDITION
const getWeatherCondition = async (cityKey) => {
    const weatherKey = "http://dataservice.accuweather.com/currentconditions/v1/"
    const query = `${cityKey}?apikey=${apiKey}`
    const response = await fetch(weatherKey + query)
    const data = await response.json()
    return data[0]
}
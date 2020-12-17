const apiKey = "tNnx8QJPdQZgWyeoOUbhPLeYgFq6rifn"

// const currentCondition = "http://dataservice.accuweather.com/currentconditions/v1/{locationKey}"

// GETTING CITY INFORMATION FROM ACCU WEATHER
const getCityInfo = async (cityName) => {
    const countryKey = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`
    // const query = `?apikey=${apiKey}&q=${cityName}`
    // const fetchingData = `${countryKey}${query}`
    const response = await fetch(countryKey)
    if (response.status !== 200) {
        alert("COUNTRY NAME INCORRECT !!!!!!!!!!!!!")
    }
    const data = await response.json()
    return data[0]
}

// GETTING CITY WEATHER CONDITION
const getWeatherCondition = async (cityKey) => {
    const weatherKey = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`
    // const query = `${cityKey}?apikey=${apiKey}`
    // const fetchingData = `${weatherKey}${query}`
    const response = await fetch(weatherKey)
    const data = await response.json()
    return data[0]
}
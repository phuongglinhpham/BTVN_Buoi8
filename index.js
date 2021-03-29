let input= document.getElementById("input")

input.addEventListener("Submit" , (E) => {
    E.preventDefault()
    let yourCity;
    yourCity = input.inputTXT.value;
    load(yourCity)
})

async function load(city) {
    try {
        let weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7eefc7ac5f1348234c949004eba8e93e`)
        console.log(weatherData.data)
        let data = weatherData.data;

        let description = document.getElementById("description")
        description.innerHTML = data.weather[0].description

        let temperature = document.getElementById("temperature")
        temperature.innerHTML = data.main.temperature + "F"

        let city = document.getElementById('city')
        city.innerHTML = data.name

    } catch (error) {
        alert('Please try again')
    }
}
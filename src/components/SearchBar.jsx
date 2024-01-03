import { useState } from "react";
import DisplayData from "./DisplayData";
import styled from "styled-components";

export default function SearchBar() {

    const [isLocation, setIsLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    function handleInputChange(event){
        setIsLocation(event.target.value);
    }

    const apiKey = 'put your api key here'
    
    async function formSubmission(event){
        event.preventDefault();
        const res = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${isLocation}&appid=${apiKey}`)).json()
        setWeatherData(res);
    }

    return (
        <MainContainer>
            <form onSubmit={formSubmission}>
                <label htmlFor="location">Enter the Location: </label>
                <input type="text" name="location" value={isLocation} onChange={handleInputChange}/>
            </form>

            {weatherData && <DisplayData 
                cityName={isLocation}
                temp={Math.round(weatherData.main.temp - 273.15) + "°C"}
                feelsLike={Math.round(weatherData.main.feels_like - 273.15) + "°C"}
                perType={weatherData.rain ? weatherData.rain : undefined}
                windSpd={weatherData.wind.speed + "m/s"}
                snow={weatherData.snow ? weatherData.snow : undefined}  />}
        </MainContainer>

      )
}

const MainContainer = styled.div`
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }

    label {
        background-color: #fff690;
        color: #372d2d;
        font-size: 30px;
        margin-bottom: 8px;
        font-weight: bold;
    }

    input {
        max-width: 220px;
        padding: 8px;
        margin-bottom: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
     }
`   
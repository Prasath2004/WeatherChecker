import React, { useState } from 'react'
import "./Home.css"
const Home = () => {

    const [city, setCity] = useState("");
    const [search, setSearch] = useState(false);
    const [weather, setWeather] = useState([]);
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a843e487a7msh2657e71de6ac5f4p1a0c40jsnc28b070611a3',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };


    const handleClick = async (e) => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setWeather(result);
            setSearch(!search)
            console.log(result);
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div>
            <div className='container'>
                <div className="header">
                    <h1>Weather Website</h1>
                </div>
                <div className="search">
                    <input type="text" className="searchbar" placeholder='Enter the location..' onChange={(e) => setCity(e.target.value)} />
                    <button onClick={handleClick}>Search</button>
                </div>
                {!search ? "" : (
                    <div>
                        <div className="img">
                            <img src={weather?.current?.condition?.icon} alt='cloud' className='image' />

                            <h4>{weather?.location?.name},{weather?.location?.region}</h4>
                        </div>
                        <div className="content">
                            <div className="left">
                                <div className="top">
                                    Temperature: {weather?.current?.temp_c}°C
                                </div>
                                <div className="bottom">
                                    Wind Direction: {weather?.current?.wind_dir}
                                </div>
                            </div>
                            <div className='right'>
                                <div className="top">
                                    Humidity: {weather?.current?.humidity}
                                </div>
                                <div className="bottom">
                                    Wind speed: {weather?.current?.wind_kph}kmph
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home
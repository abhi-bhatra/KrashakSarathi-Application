import React from 'react';
import axios from "axios";

function Soil() {
    const [post, setPost] = React.useState([]);
    
    const fetchData = React.useCallback(() => {
      axios.get("https://api.ambeedata.com/weather/forecast/by-lat-lng", {headers: {'x-api-key': 'faf80debeadf9f5107682d7b4de3a70a14f971801bbea36f9782008c0b5b5675','Content-type': 'application/json'}, params: {lat: '51.5', lng: '-0.1', filter: 'daily'}}).then((response) => {
        const APIResponse = response.data;
        console.log(APIResponse.data.forecast);
        setPost(APIResponse.data.forecast);
      })
      .catch((error) => {
        console.log(error);
      })
    }, [])

    React.useEffect(() => {
        fetchData();
      }, [fetchData]);

    if (!post) return null;

    return (
        <div>
            <h1>Weather Forecast</h1>
            {post.map((item, idx) => (
              <p key={idx}>{item.summary}
              <br /></p>
            ))}
        </div>
    );
}

export default Soil;

// apparentTemperatureHigh: 51.56
// apparentTemperatureHighTime: 1640622900
// apparentTemperatureLow: 45
// apparentTemperatureLowTime: 1640650320
// apparentTemperatureMax: 51.56
// apparentTemperatureMaxTime: 1640622900
// apparentTemperatureMin: 40.3
// apparentTemperatureMinTime: 1640574840
// cloudCover: 0.93
// dewPoint: 45.11
// humidity: 0.92
// icon: "rain"
// moonPhase: 0.78
// ozone: 304.5
// precipIntensity: 0.0076
// precipIntensityMax: 0.033
// precipIntensityMaxTime: 1640643060
// precipProbability: 0.93
// precipType: "rain"
// pressure: 992.7
// summary: "Light rain throughout the day."
// sunriseTime: 1640592420
// sunsetTime: 1640620740
// temperatureHigh: 51.99
// temperatureHighTime: 1640624100
// temperatureLow: 48.19
// temperatureLowTime: 1640650560
// temperatureMax: 51.99
// temperatureMaxTime: 1640624100
// temperatureMin: 41.99
// temperatureMinTime: 1640574000
// time: 1640563200
// uvIndex: 0
// uvIndexTime: 1640606460
// visibility: 9.57
// windBearing: 156
// windGust: 25.71
// windGustTime: 1640598180
// windSpeed: 7.48
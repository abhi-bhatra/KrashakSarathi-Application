import axios from "axios";
import React from "react";

export const Weather = (props) => {
    const [post, setPost] = React.useState([]);

    const fetchData = React.useCallback(() => {
        navigator.geolocation.getCurrentPosition(position => {
          var lat = position.coords.latitude;
          var long = position.coords.longitude; 
          
          axios.get(`https://api.ambeedata.com/weather/forecast/by-lat-lng?lat=${lat}&lng=${long}&filter=daily`, {headers: {'x-api-key': 'ef735cb93b29a90736a74381cec8d1e1599cecfa7868f934de9cd1734a8a4344','Content-type': 'application/json'}}).then((response) => {
          const APIResponse = response.data;
          console.log(APIResponse.data.forecast);
          setPost(APIResponse.data.forecast);
        })
        .catch((error) => {
          console.log(error);
        })
        });
      }, [])

      React.useEffect(() => {
        fetchData();
        }, [fetchData]);

        if (!post) return null;

    return (
        <div id='weather' className="text-center">
            <div className="container">
                <div className="col-md-10 col-md-offset-1 section-title">
                    <h2>Weather Forecasting</h2>
                </div>
                <div className="row">
                <div className="col-xs-6 col-md-3">
                    {post.map((item, idx) => (
                        <h3 key={idx}>Day {idx+1}: {item.summary} </h3>
                    ))}
                </div>
                </div>
            </div>
        </div>
    )
}
import axios from "axios";
import React from "react";

export const Weather = (props) => {
    const [post, setPost] = React.useState([]);

    const fetchData = React.useCallback(() => {
        navigator.geolocation.getCurrentPosition(position => {
          var lat = position.coords.latitude;
          var long = position.coords.longitude; 
          
          axios.get(`https://api.ambeedata.com/soil/latest/by-lat-lng?lat=${lat}&lng=${long}`, {headers: {'x-api-key': '4e01913f5204a97c2e44ff85c406b6bb8ebde8b8a63d4037210cc700c3b2350d','Content-type': 'application/json'}}).then((response) => {
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
        <div id='soil' className="text-center">
            <div className="container">
                <div className="col-md-10 col-md-offset-1 section-title">
                    <h2>Weather Forecasting</h2>
                </div>
                <div className="row">
                    {post.map((item, idx) => (
                        <div key={idx} className="col-xs-6 col-md-3">
                            <h3>Day {idx+1}: {item.summary} <b>%</b></h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
import axios from "axios";
import React from "react";

export const Soil = (props) => {
    const [post, setPost] = React.useState([]);

    const fetchData = React.useCallback(() => {
        navigator.geolocation.getCurrentPosition(position => {
          var lat = position.coords.latitude;
          var long = position.coords.longitude; 
          
          axios.get(`https://api.ambeedata.com/soil/latest/by-lat-lng?lat=${lat}&lng=${long}`, {headers: {'x-api-key': 'ef735cb93b29a90736a74381cec8d1e1599cecfa7868f934de9cd1734a8a4344','Content-type': 'application/json'}}).then((response) => {
          const APIResponse = response.data;
          console.log(APIResponse.data);
          setPost(APIResponse.data);
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
                    <h2>Soil Data</h2>
                </div>
                <div className="row">
                    {post.map((item, idx) => (
                        <div key={idx} className="col-xs-6 col-md-3">
                            <h3>Volumetric soil moisture level: {item.soil_moisture} <b>%</b></h3>
                            <h3>Temperature of the soil: {item.soil_temperature} <b>℃</b></h3>
                        </div>
                    ))}
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="thumbnail">
                                <img src="img/soil/img1.png" alt='soil' className="team-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
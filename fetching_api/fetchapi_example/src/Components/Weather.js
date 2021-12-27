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



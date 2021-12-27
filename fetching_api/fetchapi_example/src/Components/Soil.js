import React from 'react';
import axios from "axios";

function Soil() {
    const [post, setPost] = React.useState([]);
    
    const fetchData = React.useCallback(() => {
      axios.get("https://api.ambeedata.com/soil/latest/by-lat-lng", {headers: {'x-api-key': 'faf80debeadf9f5107682d7b4de3a70a14f971801bbea36f9782008c0b5b5675','Content-type': 'application/json'}, params: {lat: '51.5', lng: '-0.1'}}).then((response) => {
        const APIResponse = response.data;
        console.log(APIResponse.data);
        setPost(APIResponse.data);
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
      <h1>Soil Moisture and Temperature</h1>
      {post.map((item, idx) => (
        <p key={idx}>{item.soil_moisture} and 
        <br />
        {item.soil_temperature}</p>
      ))}
    </div>
    );
}

export default Soil;

// scantime: "2021-12-22 12:52:24Z"
// soil_moisture: 36.33333206176758
// soil_temperature: 3.4500061035156477

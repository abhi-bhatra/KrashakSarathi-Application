import React from 'react';
import axios from "axios";

function Soil() {
    const [post, setPost] = React.useState([]);
    
    React.useEffect(() => {
        axios.get("https://api.ambeedata.com/soil/latest/by-lat-lng", {headers: {'x-api-key': 'faf80debeadf9f5107682d7b4de3a70a14f971801bbea36f9782008c0b5b5675','Content-type': 'application/json'}, params: {lat: '51.5', lng: '-0.1'}}).then((response) => {
          setPost(response.data);
          console.log(response.data);
        });
      }, []);

    if (!post) return null;

    return (
        <div>
      <h1>Soil Moisture and Temperature</h1>
      <h1>{post.soil_temperature}</h1>
      {post.map((edata) => (
        <p>{edata.soil_moisture}</p>
      ))}
    </div>
    );
}

export default Soil;

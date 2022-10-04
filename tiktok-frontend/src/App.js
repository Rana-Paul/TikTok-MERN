import axios from "./axios";
import { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => (
    async function data() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }
  ),[])
  console.log(videos)
  return (
    <div className="App">
      <div className="app__videos">
        {videos.map(({channel,description,likes,message,share,song,url}) => (
          <Video 
          url={url}
          channel={channel}
          song={song}
          likes={likes}
          message={message}
          description={description}
          share={share}
          
          />
        ))}
        
      </div>
    </div>
  );
}

export default App;

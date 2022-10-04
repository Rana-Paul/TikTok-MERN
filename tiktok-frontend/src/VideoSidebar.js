import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function VideoSidebar({likes,share,message}) {

    const [liked, setLiked] = useState(false)
  return (
    <div className="videosidebar">
      <div className="videosidebar__button">
        {liked ? (
            <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)}/>
        ) : (
            <FavoriteBorderIcon fontSize="large" onClick={(e) => setLiked(true)}/>
        )}
        
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videosidebar__button">
        <MessageIcon fontSize="large" />
        <p>{message}</p>
      </div>
      <div className="videosidebar__button">
        <ShareIcon fontSize="large" />
        <p>{share}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;

import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";


function Video({url,channel, description, song, likes,share,message}) {
    const [playing,setPlaying] = useState(false)
    const videoRef = useRef(null);
    const handelVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false)
        }
        else {
            videoRef.current.play();
            setPlaying(true)
        }

    }
  return (
    <div className="video">
      <video ref={videoRef} onClick={handelVideoPress} className="video__player" loop src={url}></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} share={share} message={message}/>
    </div>
  );
}

export default Video;

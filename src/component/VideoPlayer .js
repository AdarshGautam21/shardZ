import React from 'react';
import ReactPlayer from 'react-player';
import PlayButton from "../img/play.png"
import myVideo from "../img/vi.mp4" 

export default function VideoPlayer() {
  return (
    <div className='videosPlayer' >
      <ReactPlayer
      height="180px"
      width="300px"
      light="false"
        url={myVideo}
        controls={true} // Show player controls
        playIcon={<div style={{ color: 'black' }}>
          <img src={PlayButton} alt="" />
        </div>} // Define your custom play icon here
      />
    </div>
  );
}

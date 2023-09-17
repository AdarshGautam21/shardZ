import React from 'react';
import ReactPlayer from 'react-player';
import PlayButton from "../img/play.png"
import pro from "../img/profileimg.png"
// import myVideo from "../img/vi.mp4" 
const url = "https://youtu.be/vzH1I2zk8zg?si=keL2VV3XfdE5q6DR"

export default function VideoPlayer() {
  return (
    <div className="videosCrd">
    <div className='videosPlayer' >
      <ReactPlayer
      height="180px"
      width="300px"
      light="false"
        url={url}
        controls={true} // Show player controls
        playIcon={<div style={{ color: 'black' }}>
          <img src={PlayButton} alt="" />
        </div>} // Define your custom play icon here
      />
    </div>
    <div className="textVideoCard">
      <div className="textCard">
      <div className="ProfileCard">
        <img src={pro} alt="" />
      </div>
      <div className="textTitle">      
      <h3>this is video title</h3>
      <p>maearth</p>
      <div className="textLike">
      <h4><span>likes: </span>40K </h4>
      <h4><span>4</span> hours ago</h4>
      </div>
      </div>


      </div>
    </div>
    </div>
  );
}
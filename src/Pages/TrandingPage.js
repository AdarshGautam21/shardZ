import React, { useState } from 'react'
import SideBar from '../component/SideBar';
import VideoPlayer from '../component/VideoPlayer ';

const videoData = [
    { id: 1, title: 'Video 1', videoId: 'VIDEO_ID_1' },
    { id: 2, title: 'Video 2', videoId: 'VIDEO_ID_2' },
    { id: 3, title: 'Video 3', videoId: 'VIDEO_ID_3' },
    { id: 4, title: 'Video 4', videoId: 'VIDEO_ID_4' },
    { id: 5, title: 'Video 4', videoId: 'VIDEO_ID_4' },
    { id: 6, title: 'Video 4', videoId: 'VIDEO_ID_4' },
    { id: 7, title: 'Video 4', videoId: 'VIDEO_ID_4' },
    { id: 8, title: 'Video 4', videoId: 'VIDEO_ID_4' },
    { id: 9, title: 'Video 4', videoId: 'VIDEO_ID_4' },
    // Add more video objects as needed
];


export default function TrandingPage() {
    const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    return (
    <div className="WrapComp">
            <SideBar />
            <div className="UploadPage">
                <div style={{ height: '100%', width: '100%' }}>
                    <div>
                        <div className="VideoListTreanding">
                            <div className="headVideo">
                                <p>Trending Videos</p>
                            </div>
                            <div className="VideoItems">
                                {videoData.map((video) => (
                                    <VideoPlayer
                                        key={video.id}
                                        videoId={video.videoId}
                                        title={video.title}
                                        onClick={() => handleVideoSelect(video)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

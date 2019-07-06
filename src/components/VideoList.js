import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({videos}) =>{
    const renderVideos = videos.map( video =>{
        return <VideoItem video={video}  />
    })

    return(
        <div>
            {renderVideos}
        </div>
    )
}

export default VideoList;
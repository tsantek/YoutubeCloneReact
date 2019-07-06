import React from 'react'


const VideoItem = ({video}) =>{
    return (
        <div className="ui list">
            <div className="item">
                <img className="ui avatar image" alt="" src={ video.snippet.thumbnails.medium.url} />
                <div className="content">
                    <p className="header">{ video.snippet.title}</p>
                    <div className="description">Last seen watching <a><b>Arrested Development</b></a> just now.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoItem;
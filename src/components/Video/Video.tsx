import React from 'react';

const Video = () => {
  return (
    <div>
      <iframe
        title='home page video'
        style={{
          width: '35vw',
          height: '40vh',
          borderRadius: '10px'
        }}
        src={`https://www.youtube.com/embed/VVfv3N4yLyM`}
        frameBorder="0"
        allow="fullscreen; accelerometer; encrypted-media; gyroscope; picture-in-picture" 
      />
  </div>
  )
}

export default Video;
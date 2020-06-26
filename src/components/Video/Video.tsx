import React from 'react';
import useIsMobile from '../../hooks/useIsMobile';

const Video: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div>
      <iframe
        title="Our Story video"
        style={{
          width: isMobile ? '100vw' : '50vw',
          height: '45vh',
        }}
        src={`https://www.youtube.com/embed/VVfv3N4yLyM`}
        frameBorder="0"
        allow="fullscreen; accelerometer; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
};

export default Video;

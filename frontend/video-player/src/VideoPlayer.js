import React, { useRef } from 'react';

const VideoPlayer = () => {
    const videoRef = useRef(null);

    return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <video
            ref={videoRef}
            controls
            style={{ width: '50%', height: 'auto', border: '1px solid #ccc' }} // Keeps video responsive
        >
            <source src="http://127.0.0.1:5000/video" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>

    );
};

export default VideoPlayer;

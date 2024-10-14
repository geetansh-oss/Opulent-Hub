import React, { useState } from "react";

const VideoInsert = () => {
  const [videoSrc, setVideoSrc] = useState(null);

  // Handle video upload from file input
  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file); // Create a local URL for the uploaded video
      setVideoSrc(videoUrl);
    }
  };

  // Handle video URL input
  const handleVideoUrlInput = (event) => {
    setVideoSrc(event.target.value); // Set video URL directly from input
  };

  return (
    <div>
      <h2>Custom Video Insert</h2>
      
      {/* File upload input */}
      <div>
        <label>Upload Video: </label>
        <input type="file" accept="video/*" onChange={handleVideoUpload} />
      </div>
      
      {/* URL input */}
      <div>
        <label>Video URL: </label>
        <input type="text" placeholder="Enter video URL" onChange={handleVideoUrlInput} />
      </div>
      
      {/* Video player */}
      {videoSrc && (
        <div style={{ marginTop: "20px" }}>
          <video width="600" controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoInsert;

import { useEffect } from 'react';
import './styles/videoHeaderStyles.css';
import useVideoStore from '../../../../store/videoStore';

const VideoHeader = () => {
  const videos = useVideoStore((state) => state.videoList);
  const currentVideoIndex = useVideoStore((state) => state.currentVideoIndex);
  const currentVideoPlaying = useVideoStore(
    (state) => state.currentVideoPlaying
  );
  const setCurrentVideoPlaying = useVideoStore(
    (state) => state.setCurrentVideoPlaying
  );

  useEffect(() => {
    /* Finding the video that matches the currentVideoIndex and setting it to the currentVideo state. */
    videos.find((video, i) => {
      if (i === currentVideoIndex) {
        setCurrentVideoPlaying(video);
        return;
      }
    });
  }, [currentVideoIndex]);

  return (
    <div className='video-info-container'>
      <h4 className='video-room-info-title'>
        {currentVideoPlaying?.video_title}
      </h4>
      <div className='author-container'>
        <img
          src={currentVideoPlaying?.channel_pic_url}
          alt={currentVideoPlaying?.video_title}
          className='author-picture'
        />
        <h6 className='author-info-subtitle'>
          {currentVideoPlaying?.channel_title}
        </h6>
      </div>
    </div>
  );
};

export default VideoHeader;

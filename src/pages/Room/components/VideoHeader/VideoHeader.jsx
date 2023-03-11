import './styles/videoHeaderStyles.css';

const VideoHeader = () => {
  return (
    <div className='video-info-container'>
      <h4 className='video-room-info-title'>Hi</h4>
      <div className='author-container'>
        <img src='' alt='' className='author-picture' />
        <h6 className='author-info-subtitle'>Hi2</h6>
      </div>
      <div className='video-stats-container'>
        <span>views</span>
        <span>date</span>
      </div>
    </div>
  );
};

export default VideoHeader;

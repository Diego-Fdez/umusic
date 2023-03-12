import ReactPlayer from 'react-player';
import './styles/videoScreenStyles.css';
import useVideoStore from '../../../../store/videoStore';
import UsePlaying from '../../../../hooks/usePlaying';

const VideoScreen = () => {
  const videos = useVideoStore((state) => state.videoList);
  const currentVideoIndex = useVideoStore((state) => state.currentVideoIndex);
  const shouldAutoPlay = useVideoStore((state) => state.shouldAutoPlay);
  const { handlePrev, handleNext, handleEnded } = UsePlaying();

  return (
    <div className='player-wrapper'>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videos[currentVideoIndex]?.video_id}`}
        width='100%'
        height='100%'
        controls={true}
        playing={shouldAutoPlay}
        onEnded={handleEnded}
      />
      <div className='controls-wrapper'>
        <button onClick={handlePrev} className='play-buttons'>
          <img src='/back-icon.svg' alt='back-icon' className='play-icons' />
        </button>
        <button onClick={handleNext} className='play-buttons'>
          <img src='/next-icon.svg' alt='next-icon' className='play-icons' />
        </button>
      </div>
    </div>
  );
};

export default VideoScreen;

import './styles/homeStyles.css';
import { VideoCard } from './components';
import useVideoStore from '../../store/videoStore';

const Home = () => {
  const videos = useVideoStore((state) => state.videos);
  console.log(videos);
  return (
    <main className='home-container'>
      {videos.map((video) => (
        <div key={video.id.videoId}>
          <VideoCard video={video} />
        </div>
      ))}
    </main>
  );
};

export default Home;

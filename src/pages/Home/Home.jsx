import './styles/homeStyles.css';
import { CategoriesScreen } from '../../components';
import { VideoCard } from './components';
import useVideoStore from '../../store/videoStore';

const Home = () => {
  const videos = useVideoStore((state) => state.videos);
  console.log(videos);
  return (
    <>
      <CategoriesScreen />
      <main className='home-container'>
        {videos.map((video) => (
          <VideoCard key={video.id.videoId} video={video} />
        ))}
      </main>
    </>
  );
};

export default Home;

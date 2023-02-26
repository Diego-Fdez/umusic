import './styles/homeStyles.css';
import { CategoriesScreen, NavbarScreen } from '../../components';
import { VideoCard } from './components';
import useVideoStore from '../../store/videoStore';

const Home = () => {
  const videos = useVideoStore((state) => state.videos);

  return (
    <>
      <NavbarScreen />
      <CategoriesScreen />
      <main className='home-container'>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </main>
    </>
  );
};

export default Home;

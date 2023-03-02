import './styles/homeStyles.css';
import { CategoriesScreen, NavbarScreen, HeadScreen } from '../../components';
import { VideoCard } from './components';
import useVideoStore from '../../store/videoStore';

const Home = () => {
  const videos = useVideoStore((state) => state.videos);

  return (
    <>
      <HeadScreen pageTitle={'Home'} />
      <NavbarScreen />
      <CategoriesScreen />
      <main className='home-container'>
        {videos.map((video) => (
          <VideoCard
            key={video.id.videoId ? video.id.videoId : video.id}
            video={video}
          />
        ))}
      </main>
    </>
  );
};

export default Home;

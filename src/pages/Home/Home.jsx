import './styles/homeStyles.css';
import {
  CategoriesScreen,
  NavbarScreen,
  HeadScreen,
  Loader,
} from '../../components';
import { VideoCard } from './components';
import useVideoStore from '../../store/videoStore';

const Home = () => {
  const videos = useVideoStore((state) => state.videos);
  const loading = useVideoStore((state) => state.loading);

  return (
    <>
      <HeadScreen pageTitle={'Home'} />
      <NavbarScreen />
      <CategoriesScreen />
      {loading && <Loader />}
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

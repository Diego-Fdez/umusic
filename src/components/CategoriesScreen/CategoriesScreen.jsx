import './styles/categoriesStyles.css';
import useVideoStore from '../../store/videoStore';
import { CategoriesList } from './components';
import { useFetch } from '../../hooks/useFetch';

const CategoriesScreen = () => {
  const category = useVideoStore((state) => state.selectedCategory);
  useFetch(
    `videos?part=snippet&chart=mostPopular&maxResults=24&videoCategoryId=${category}`
  );

  return <CategoriesList />;
};

export default CategoriesScreen;

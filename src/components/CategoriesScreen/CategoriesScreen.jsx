import './styles/categoriesStyles.css';
import useVideoStore from '../../store/videoStore';
import { CategoriesList } from './components';
import { useFetch } from '../../hooks/useFetch';

const CategoriesScreen = () => {
  const keyword = useVideoStore((state) => state.keyword);
  useFetch(`v1/search/?q=${keyword}&hl=en&gl=US`);

  return <CategoriesList />;
};

export default CategoriesScreen;

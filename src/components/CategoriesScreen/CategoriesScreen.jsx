import './styles/categoriesStyles.css';
import useVideoStore from '../../store/videoStore';
import { CategoriesList } from './components';
import { useFetch } from '../../hooks/useFetch';

const CategoriesScreen = () => {
  const category = useVideoStore((state) => state.selectedCategory);
  useFetch(`v1/search/?q=wisin&hl=en&gl=US`);

  return <CategoriesList />;
};

export default CategoriesScreen;

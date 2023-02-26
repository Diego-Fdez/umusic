import { useEffect } from 'react';
import './styles/categoriesStyles.css';
import useVideoStore from '../../store/videoStore';
import { CategoriesList } from './components';
import { fetchVideosByCategory } from '../../utils/fetchVideosByCategory';

const CategoriesScreen = () => {
  const addVideos = useVideoStore((state) => state.addVideos);
  const category = useVideoStore((state) => state.selectedCategory);

  async function fetchData() {
    try {
      const data = await fetchVideosByCategory(category);
      console.log(data.items);
      addVideos(data?.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [category]);

  return <CategoriesList />;
};

export default CategoriesScreen;

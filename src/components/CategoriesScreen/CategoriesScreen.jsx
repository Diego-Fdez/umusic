import { useState, useEffect } from 'react';
import './styles/categoriesStyles.css';
import { fetchFromAPI } from '../../utils/fetchFromApi';
import useVideoStore from '../../store/videoStore';

const CategoriesScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const addVideos = useVideoStore((state) => state.addVideos);

  async function fetchData() {
    try {
      const data = await fetchFromAPI(
        `search?part=snippet&q=${selectedCategory}`
      );
      addVideos(data?.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <aside className='categories-container'>
      <button className='category-button'>All</button>
      <button className='category-button'>Electronics</button>
      <button className='category-button'>Fashion</button>
      <button className='category-button'>Music</button>
      <button className='category-button'>Reggae</button>
      <button className='category-button'>Sports</button>
      <button className='category-button'>Travel</button>
    </aside>
  );
};

export default CategoriesScreen;

import { useState, useEffect } from 'react';
import './styles/categoriesListStyles.css';
import { fetchCategories } from '../../../../utils/fetchYoutubeCategories';
import useVideoStore from '../../../../store/videoStore';

const CategoriesList = () => {
  const addCategories = useVideoStore((state) => state.addSelectedCategory);
  const [categories, setCategories] = useState([]);

  /**
   * When the component mounts, fetch the categories from the YouTube API and set the categories state
   * to the response.
   */
  async function fetchYoutubeCategories() {
    try {
      const categories = await fetchCategories();
      setCategories(categories?.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchYoutubeCategories();
  }, []);

  /**
   * When the user clicks on a category, the category is added to the list of categories
   */
  const handleClick = (category) => {
    addCategories(category);
  };

  return (
    <aside className='categories-container'>
      {categories?.map((category) => (
        <button
          key={category?.id}
          className='category-button'
          onClick={() => handleClick(category?.id)}
        >
          {category?.snippet?.title}
        </button>
      ))}
    </aside>
  );
};

export default CategoriesList;

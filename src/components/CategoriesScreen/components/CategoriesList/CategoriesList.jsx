import { useState, useEffect } from 'react';
import './styles/categoriesListStyles.css';
import useVideoStore from '../../../../store/videoStore';
import { useFetch } from '../../../../hooks/useFetch';

const CategoriesList = () => {
  //const { getData } = useFetch('videoCategories?part=snippet&regionCode=US');
  const addCategories = useVideoStore((state) => state.addSelectedCategory);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories([
      { id: 1, title: 'wisin' },
      { id: 2, title: 'yandel' },
      { id: 3, title: 'new' },
    ]);
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
          {category?.title}
        </button>
      ))}
    </aside>
  );
};

export default CategoriesList;

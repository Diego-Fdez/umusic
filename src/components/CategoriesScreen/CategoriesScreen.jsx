import './styles/categoriesStyles.css';

const CategoriesScreen = () => {
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

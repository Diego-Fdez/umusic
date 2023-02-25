import './App.css';
import { NavbarScreen, CategoriesScreen } from './components';
import { Home } from './pages';

function App() {
  return (
    <div className='container'>
      <NavbarScreen />
      <CategoriesScreen />
      <Home />
    </div>
  );
}

export default App;

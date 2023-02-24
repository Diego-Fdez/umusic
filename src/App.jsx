import './App.css';
import { NavbarScreen, CategoriesScreen } from './components';
import { AdminHome } from './pages';

function App() {
  return (
    <div className='container'>
      <NavbarScreen />
      <CategoriesScreen />
      <AdminHome />
    </div>
  );
}

export default App;

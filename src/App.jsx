import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import userStore from './store/userStore';
import { Loader } from './components';

const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Login/Login'));
const PlayList = lazy(() => import('./pages/PlayList/PlayList'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const Room = lazy(() => import('./pages/Room/Room'));

function App() {
  const user = userStore((state) => state.user);

  return (
    <div className='container'>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='playlist/:id' element={<PlayList />} />
            <Route path='/:rest/*' element={<ErrorPage />} />
            <Route path='room' element={<Room />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;

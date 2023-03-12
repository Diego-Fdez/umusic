import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import userStore from './store/userStore';
import { Loader } from './components';

const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Login/Login'));
const PlayerScreen = lazy(() => import('./pages/PlayerScreen/PlayerScreen'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const Room = lazy(() => import('./pages/Room/Room'));
const QRScreen = lazy(() => import('./pages/QRScreen/QRScreen'));
const TemporaryAuth = lazy(() => import('./pages/TemporaryAuth/TemporaryAuth'));

function App() {
  const user = userStore((state) => state.user);

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <div className='container'>
        <Suspense fallback={<Loader />}>
          <BrowserRouter>
            <Routes>
              <Route path='/' index element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='watch/:id' element={<PlayerScreen />} />
              <Route path='/:rest/*' element={<ErrorPage />} />
              <Route path='room/:id' element={<Room />} />
              <Route path='qr' element={<QRScreen />} />
              <Route path='temporary-login?' element={<TemporaryAuth />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;

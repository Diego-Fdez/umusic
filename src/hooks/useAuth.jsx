import { useGoogleLogin } from '@react-oauth/google';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { useNavigate } from 'react-router-dom';
import userStore from '../store/userStore';

const UseAuth = () => {
  const addUser = userStore((state) => state.addUser);
  const loadingUser = userStore((state) => state.setLoadingUser);
  const navigate = useNavigate();

  //login to the database
  async function handleAuth(id, name, email, picture) {
    const setData = {
      id,
      userName: name,
      email,
      picture,
    };

    /* Creating a new instance of the AbortController class. */
    const abortController = new AbortController();
    loadingUser(true);
    fetch(
      `${import.meta.env.VITE_SERVER_URL}/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
          // mode: 'no-cors',
        },
        body: JSON.stringify(setData),
      },
      {
        signal: abortController.signal,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        addUser(data?.data), navigate('/');
      })
      .catch((error) => console.log(error))
      .finally(() => loadingUser(false));

    /* Returning a function that is called when the component is unmounted. */
    return () => abortController.abort();
  }

  /* A function that is called when the user clicks the google login button. */
  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      /* Fetching the user's information from google. */
      fetch(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenResponse.access_token}`
      )
        .then((response) => response.json())
        .then((data) =>
          handleAuth(data.sub, data.name, data.email, data.picture)
        )
        .catch((error) => console.log(error));
    },
  });

  /* A function that is called when the user clicks the facebook login button. */
  const Facebook = () => (
    <FacebookLogin
      appId={import.meta.env.VITE_FACEBOOK_APP_ID}
      onSuccess={(response) => {
        console.log('Login Success!', response);
      }}
      onFail={(error) => {
        console.log('Login Failed!', error);
      }}
      onProfileSuccess={(response) => {
        handleAuth(
          response?.id,
          response?.name,
          response?.email,
          response?.picture?.data?.url
        );
      }}
      render={({ onClick }) => (
        <button onClick={onClick}>
          <img
            src='/facebook.svg'
            alt='facebook-logo'
            className='logo-img-facebook'
          />
          Connect with Facebook
        </button>
      )}
    />
  );

  return { googleLogin, Facebook };
};

export default UseAuth;

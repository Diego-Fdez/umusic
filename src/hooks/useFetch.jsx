import { useEffect, useState } from 'react';
import useVideoStore from '../store/videoStore';

export function useFetch(url) {
  const baseURL = 'https://youtube138.p.rapidapi.com';
  const addVideos = useVideoStore((state) => state.addVideos);
  const loading = useVideoStore((state) => state.setLoading);
  const setError = useVideoStore((state) => state.setError);
  const [getData, setGetData] = useState([]);
  const [controller, setController] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST,
      },
    };

    const abortController = new AbortController();
    setController(abortController);
    loading(true);
    fetch(`${baseURL}/${url}`, options, {
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((data) => {
        setGetData(data), addVideos(data?.contents), setError(data);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Request was cancelled');
        }
        setError(error);
      })
      .finally(() => loading(false));

    return () => abortController.abort();
  }, [url]);

  const handleCancelRequest = () => {
    if (controller) {
      controller.abort();
      setError('Request was cancelled');
    }
  };

  return { getData, handleCancelRequest };
}

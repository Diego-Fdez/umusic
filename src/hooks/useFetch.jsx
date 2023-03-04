import { useEffect, useState } from 'react';
import useVideoStore from '../store/videoStore';

export function useFetch(url) {
  const baseURL = 'https://www.googleapis.com/youtube/v3';
  const addVideos = useVideoStore((state) => state.addVideos);
  const loading = useVideoStore((state) => state.setLoading);
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    loading(true);
    fetch(`${baseURL}/${url}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setGetData(data?.items), addVideos(data?.items);
      })
      .catch((error) => console.log(error))
      .finally(() => loading(false));
  }, [url]);

  return { getData };
}

import axios from 'axios';

export const BASE_URL = `https://www.googleapis.com/youtube/v3`;

/**
 * This function takes a url as an argument, and returns the data from the API.
 * @returns The data object from the axios call.
 */
export const fetchFromYoutube = async (keyword) => {
  const { data } = await axios(`${BASE_URL}/search`, {
    params: {
      part: 'snippet',
      maxResults: 24,
      key: import.meta.env.VITE_YOUTUBE_API_KEY,
      q: keyword,
    },
  });

  return data;
};

import axios from 'axios';

export const BASE_URL = `https://www.googleapis.com/youtube/v3/videos`;

/**
 * This function takes a url as an argument, and returns the data from the API.
 * @returns The data object from the axios call.
 */
export const fetchVideosByCategory = async (id) => {
  const { data } = await axios(`${BASE_URL}`, {
    params: {
      part: 'snippet',
      chart: 'mostPopular',
      maxResults: 24,
      videoCategoryId: id,
      key: 'AIzaSyA01Mxc1RdjzJZeUuUKplNzu7Ww1QEvXTI',
    },
  });

  return data;
};

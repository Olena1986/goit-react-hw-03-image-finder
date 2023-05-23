import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '35978039-e1b43f028e4248e636af167c6';

export const fetchImages = async (query, page = 1, perPage = 12) => {
  try {
    const response = await axios.get('/', {
      params: {
        q: query,
        page: page,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: perPage,
      },
    });

    const images = response.data.hits.map(image => ({
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
    }));

    return images;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

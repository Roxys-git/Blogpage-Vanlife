import axios from 'axios';

const API_URL = 'cloudinary://141341298196915:W6e8znxonGvguywR0Q5SzcjW9ow@dfnppjwde';
const API_KEY = '141341298196915';

export const fetchPosts = async () => {
  try {
    const res = await axios.get(`${API_URL}?key=${API_KEY}`);
    return res.data.posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

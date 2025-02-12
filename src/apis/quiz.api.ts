import axios from 'axios';

const quizApi = axios.create({
  baseURL: import.meta.env.VITE_QUIZ_API_BASE_URL,
  params: {
    apiKey: import.meta.env.VITE_QUIZ_API_KEY,
  },
});

export default quizApi;

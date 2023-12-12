import axios from 'axios';
// Por questões de segurança não coloquei a Base Url e apikey no github...
export const api = axios.create({
  baseURL: '',
  headers: {
    apikey: '',
    authorization: '',
  },
});

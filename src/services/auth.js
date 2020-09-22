import axios from 'axios';


export const api = axios.create({
  baseURL: 'https://moov-back-end.herokuapp.com/'
});


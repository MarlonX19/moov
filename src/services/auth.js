import axios from 'axios';


export const api = axios.create({
  baseURL: 'http://192.168.15.11:3000/'
  //https://moov-back-end.herokuapp.com/
  
});


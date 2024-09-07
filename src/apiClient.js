   // apiClient.js
   import axios from 'axios';

   const apiClient = axios.create({
     baseURL: 'https://tor.appdevelopers.mobi/api',
   });

   export default apiClient;
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://parking-lot-to-pfz.herokuapp.com/parking/AaA-4444'
});

export default api;
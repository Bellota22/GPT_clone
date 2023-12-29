import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_HOST

export const axi = axios.create({ baseURL });

export const authAxios = axios.create({
    baseURL,
    withCredentials: true,
});


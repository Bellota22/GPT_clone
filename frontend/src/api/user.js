import {axi} from './authAxios';
import toast from 'react-hot-toast';

export const createUser = async (message) => {
    const data = {
        "username": message.email,
        "password": message.password,   
    };

    try {
        const response = await axi.post('/auth/register', data);
        
        if (response.data.access_token) {
            // Store the token in local storage
            localStorage.setItem('access_token', response.data.access_token);
        }
        return response.data;
    } catch (error) {
        toast.error('Username or password incorrect');
        return null;
    }
};


export const loginUser = async (message) => {
    const formData = new URLSearchParams();
    formData.append('username', message.email);
    formData.append('password', message.password);

    try {
        const response = await axi.post('/auth/login/', formData);
        localStorage.setItem('access_token',response.data.access_token)
        return response.data;
    } catch (error) {
        toast.error('Username or password incorrect');
        return null;
    }
}

export const loginGoogle = async (token) => {
    const tokenString = JSON.stringify(token);
    const formData = new URLSearchParams();
    formData.append('token', tokenString);
    try {
        const response = await axi.post('/auth/google', { token: tokenString });
        console.log("🚀 ~ file: user.js:45 ~ loginGoogle ~ response:", response)
        localStorage.setItem('access_token',response.data.access_token)
        return response.data;
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        return null;
    }
};
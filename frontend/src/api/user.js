import {axi} from './authAxios';

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
        console.error('Error al realizar la solicitud:', error);
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
        console.error('Error al realizar la solicitud:', error);
        return null;
    }
}
import {axi } from './authAxios';
import { jwtDecode } from "jwt-decode";

export const getChatLorem = async (message) => {
    const token = localStorage.getItem('access_token'); // Replace with the actual token   
    console.log(jwtDecode(token))
    const data = { message };
    try {
        const response = await axi.post('/chat', data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        return null;
    }
};


export const saveChat = async (message) => {
    const data = { message: JSON.stringify(message) };
    try {
        const response = await axi.post('/chat/save', data);
        return response.data;
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        return null;
    }
}

export const getChat = async (id) => {
    try {
        const response = await axi.get(`/chat/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        return null;
    }
}
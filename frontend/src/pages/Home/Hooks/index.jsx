
import { getChatLorem, saveChat } from '../../../api/chat';
import React from 'react';
import toast from 'react-hot-toast';

export const useHome = () => {

    const [input, setInput] = React.useState('');
    const [chat, setChat] = React.useState([]);


    
    const handleSendMessage = async () => {
        const response = await getChatLorem(input);
        const newMessage = {
        userMessage: input,
        botResponse: response?.text,  // Use the 'text' field from the response
        };
        setChat(prev => [...prev, newMessage]);
        setInput(''); // Limpia el input después de enviar el mensaje



    };

    const handleShare = async () => {
        const response = await saveChat(chat);    
        const shareableLink = `${window.location.origin}/chat/${response.id}`;
        navigator.clipboard.writeText(shareableLink);
        toast.success("Link copied to clipboard");
    }

    return {
        input,
        setInput,
        chat,
        setChat,
        handleSendMessage,
        handleShare
        
    }
}
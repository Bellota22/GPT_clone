import React, { useEffect, useState } from 'react';
import Chat from '../Home/Chat';
import { useParams } from 'react-router-dom';
import { getChat } from '../../api/chat';

function SharedChat() {
    const { chatId } = useParams();

    const [chat, setChat] = useState([]);
    
    const getChatForShare = async () => {
      const response = await getChat(chatId);
      const responseParsed = JSON.parse(response.content);
      setChat(responseParsed);
    }

    useEffect( ()  => {
      getChatForShare()
     
    }, []);

    return (
      <div className='w-full h-[100vh] flex bg-gray-700'>
        <div className='w-full flex justify-between p-4'>
          
          <div className='text-white font-semibold'>
            ChatGPT 
          </div>

          <div className='w-1/2 h-full flex flex-col justify-between'>
            <Chat chat={chat} />
          </div>

          <div className='cursor-pointer text-white font-semibold'>
          </div>

        </div>
    </div>
    );
}


export default SharedChat
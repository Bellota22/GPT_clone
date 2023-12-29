import SideBar from '../../components/SideBar'
import InputBar from './InputBar'
import React from 'react'
import './index.css'
import { getChatLorem, saveChat } from '../../api/chat';
import Chat from './Chat';

function Home() {
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
    alert("Link copied to clipboard");
  }
  


  return (
    <>
      <div className='w-full h-[100vh] flex bg-gray-700'>
        <SideBar />
        <div className='w-full flex justify-between p-4'>
          
          <div className='text-white font-semibold'>
            ChatGPT 
          </div>

          <div className='w-1/2 h-full flex flex-col justify-between'>
            <Chat chat={chat} />
            <InputBar setInput={setInput} handleSendMessage={handleSendMessage} input={input} />
          </div>

          <div className='cursor-pointer text-white font-semibold' onClick={() => handleShare()} >
            Share
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;

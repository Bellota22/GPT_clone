import SideBar from '../../components/SideBar'
import InputBar from './InputBar'
import React from 'react'
import './index.css'
import Chat from './Chat';
import { useHome } from './Hooks';
function Home() {
  
  const {
    input,
    chat,
    setInput,
    handleSendMessage,
    handleShare

  } = useHome()

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

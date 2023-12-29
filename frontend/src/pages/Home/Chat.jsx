import React from 'react'
import './index.css'
function Chat({chat}) {
  return (
    <div className='flex flex-col overflow-y-auto scrollbar-hide'>
        {chat?.map((msg, index) => (
            <React.Fragment key={index}>
            <div className='user-message'>
                <div className='message-bubble flex w-full'>
                <div className='message-avatar border'>T</div>
                <div className="w-full">
                    <p className='message-sender'>You</p>
                    <p className='mr-10 text-white text-justify'>{msg.userMessage}</p>
                </div>
                </div>
            </div>
                <div className='bot-message'>
                <div className='message-bubble flex w-full'>
                <div className='message-bot border'>T</div>
                <div className="w-full ">
                    <p className='message-sender'>Chat</p>
                    <p className='mr-10 text-white text-justify '>{msg?.botResponse}</p>

                </div>
                </div>
            </div>
            </React.Fragment>
            ))}
    </div>
  )
}

export default Chat
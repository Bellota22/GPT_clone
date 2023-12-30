import React, { useEffect, useState } from 'react';
import './index.css';

function Chat({ chat }) {
    const [animatedMessages, setAnimatedMessages] = useState({});
    const [lastIndex, setLastIndex] = useState(-1);

    useEffect(() => {
        const lastMsgIndex = chat.length - 1;
        if (lastMsgIndex > lastIndex) {
            const msg = chat[lastMsgIndex];
            const words = msg?.botResponse.split(' '); 
            let i = 0;
            const intervalId = setInterval(() => {
                if (i <= words.length) {
                    setAnimatedMessages(prev => ({
                        ...prev,
                        [lastMsgIndex]: words.slice(0, i).join(' ')
                    }));
                    i++;
                } else {
                    clearInterval(intervalId);
                }
            }, 30); // Ajusta la velocidad de la animación aquí
            setLastIndex(lastMsgIndex);
        }
    }, [chat]);

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
                                <p className='mr-10 text-white text-justify'>{animatedMessages[index]}</p>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}

export default Chat;

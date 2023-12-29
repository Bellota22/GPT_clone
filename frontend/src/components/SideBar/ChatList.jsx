import React from 'react'

function ChatList({ children }) {
  return (
    <div className='w-full h-full ' >
        <p className='text-gray-400 p-6 mt-4' >Yesterday</p>
        <div className='bg-black   '>{children}</div>
    </div>

  
  )
}

export default ChatList
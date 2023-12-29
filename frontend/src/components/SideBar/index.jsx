import React from 'react'
import Header from './Header'
import ChatList from './ChatList'
import Chat from './Chat'

function SideBar() {
  return (
      
    <>
    <section className='bg-black w-[320px] h-[100vh] overflow-y-auto scrollbar-hide '>
      <Header />
      <ChatList>
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />

      </ChatList>
    </section>


    </>
      
  )
}

export default SideBar
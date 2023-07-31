import React from 'react'
import Chat from './Chat'
import ChatInput from './ChatInput'

const NewChatPage = () => {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
        <Chat/>
        <ChatInput/>
    </div>
  )
}

export default NewChatPage
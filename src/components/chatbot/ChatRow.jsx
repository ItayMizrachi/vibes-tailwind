import { ChatIcon, TrashIcon } from '@heroicons/react/outline'
import React from 'react'
import { Link } from 'react-router-dom'

const ChatRow = ({_id}) => {
    //to={`/chat/${id}`}
  return (
    <Link  className={`chatRow justify-center`} >
        <ChatIcon className='w-5 h-5'/>
        <p className='flex-1 hidden truncate md:inline-flex'>New Chats</p>
        <TrashIcon className='w-5 h-5 text-gray-700 hover:text-red-700'/>
    </Link>
  )
}

export default ChatRow
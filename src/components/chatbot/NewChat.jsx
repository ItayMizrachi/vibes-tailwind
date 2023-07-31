import { PlusCircleIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';
import { MyContext } from '../../context/myContext';
import { URL, doApiMethod } from '../../services/apiService';

const NewChat = () => {
    const { userData } = useContext(MyContext);

    const createNewChat = async () => {
        try {
            const url = URL + "/newchatbot";
            await doApiMethod(url , "POST", _bodyData, userData._id);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='border border-gray-700 chatRow'>
        <PlusCircleIcon className='w-4 h-4'/>
        <p>New Chat</p>
    </div>
  )
}

export default NewChat
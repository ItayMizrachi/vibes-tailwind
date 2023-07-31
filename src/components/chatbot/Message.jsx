import React, { useContext } from 'react';
import { MyContext } from '../../context/myContext';

const Message = () => {
    const { userData } = useContext(MyContext);
  return (
    <div className={`py-5 text-white `}>
        <div className='flex max-w-2xl px-10 mx-auto space-x-5'>
            <img className='w-8 h-8' src={userData?.profilePic} alt="profile pic" />
            <p className='pt-1 text-md'>
                Message Text..
              lorem500
            </p>
        </div>
    </div>
  )
}

export default Message
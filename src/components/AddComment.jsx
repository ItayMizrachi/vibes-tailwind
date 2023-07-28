import { EmojiHappyIcon } from '@heroicons/react/outline'
import React from 'react'
import { TOKEN_KEY } from '../services/apiService'

const AddComment = ({handleSubmit, register, onSubForm}) => {
  return (
    <>
          {localStorage[TOKEN_KEY] && (
        <form
          onSubmit={handleSubmit(onSubForm)}
          className="flex items-center p-4"
        >
          <EmojiHappyIcon className="h-7" />
          <input
            {...register("text", { required: true, minLength: 1 })}
            type="text"
            placeholder="add a comment.."
            className="flex-1 border-none outline-none focus:ring-0 "
          />
          <button type="submit" className="font-semibold text-blue-400">
            Post
          </button>
        </form>
      )}
    </>
  )
}

export default AddComment
import { PaperAirplaneIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { TOKEN_KEY } from "../../services/apiService";

const ChatInput = () => {
  const [prompt, setPrompt] = useState("");

//   const sendMessage = async (e) => {
//    if(!prompt) return
//     const input = prompt.trim();
//     setPrompt("");

//     //const message: POST msg
//   };
  return (
    <div className="text-sm text-gray-400 rounded-lg bg-gray-700/50">
      <form
        //onSubmit={SendMessage}
        className="flex p-5 space-x-5"
      >
        <input
          className="flex-1 bg-transparent disabled:cursor-not-allowed disabled:text-gray-300"
          type="text"
          disabled={!localStorage[TOKEN_KEY]}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask me a question"
        />

        <button
          className="bg-[#11A37F] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold px-4 py-2 rounded"
          disabled={!localStorage[TOKEN_KEY]}
          type="submit"
        >
          <PaperAirplaneIcon className="w-4 h-4 rotate-45" />
        </button>
      </form>

      <div>{/* ModelSelection */}</div>
    </div>
  );
};

export default ChatInput;

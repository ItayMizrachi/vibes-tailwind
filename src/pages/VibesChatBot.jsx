import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";

const VibesChatBot = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);

  const onKeyboardClick = (e) => {
    if (e.key === "Enter") {
      getMessages();
    }
  };

  const createNewChat = () => {
    setMessage(null);
    setValue("");
    setCurrentTitle(null);
  };

  const handleClick = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle);
  };

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        `http://localhost:3005/completions`,
        options
      );
      const data = await response.json();
    //   console.log(data);
      setMessage(data.choices[0].message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(currentTitle, value, message);
    if (!currentTitle && value && message) {
      setCurrentTitle(value);
    }
    if (currentTitle && value && message) {
      setPreviousChats((prevChats) => [
        ...prevChats,
        {
          title: currentTitle,
          role: "user",
          content: value,
        },
        {
          title: currentTitle,
          role: message.role,
          content: message.content,
        },
      ]);
    }
  }, [message, currentTitle]);

  

  const currentChat = previousChats.filter(
    (previousChats) => previousChats.title === currentTitle
  );

  const uniqueTitles = Array.from(
    new Set(previousChats.map((previousChats) => previousChats.title))
  );

//   console.log(uniqueTitles);

  return (
    <div className="chatbot">
      <section className="bg-gray-200 side-bar ">
        <button
          onClick={createNewChat}
          className="p-[10px] m-[10px] text-white bg-blue-500 hover:bg-blue-600
          border rounded-md"
        >
          + new chat
        </button>
        <ul className="history">
          {uniqueTitles?.map((uniqueTitle, index) => (
            <li className="p-[10px] m-[10px] text-white bg-blue-500 hover:bg-blue-600
            border rounded-md" onClick={() => handleClick(uniqueTitle)} key={index}>
              {uniqueTitle}
            </li>
          ))}
        </ul>
        <nav>
          <p>made by vibes</p>
        </nav>
      </section>
      <section className="main-chatbot">
        {!currentTitle && (
          <h1 className="mb-4 text-2xl font-bold">Vibes Chatbot</h1>
        )}

        <ul className="feed">
          {currentChat?.map((chatMessage, index) => (
            <li key={index}>
              <p className="role ">{chatMessage.role}</p>
              <p>{chatMessage.content}</p>
            </li>
          ))}
        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input
              className="bg-gray-200 focus:ring-black input-chatbot"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKeyboardClick}
            />
            <div id="submit">
              <ArrowCircleRightIcon
                onClick={getMessages}
                className="chat-send-btn"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VibesChatBot;

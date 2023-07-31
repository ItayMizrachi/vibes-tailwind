import {
    ExclamationCircleIcon,
    LightningBoltIcon,
    SunIcon,
} from "@heroicons/react/outline";
import React from "react";

const ChatbotMessages = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="mb-20 text-5xl font-bold">Vibes Chatbot</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="w-8 h-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Explain Something to me</p>
            <p className="infoText">
              What is the difference between a dog and a cat?
            </p>
            <p className="infoText">What is the color of the sun?</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <LightningBoltIcon className="w-8 h-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Change the Chatbot Model to use</p>
            <p className="infoText">Messages are stored in Mongo database</p>
            <p className="infoText">
              Hot Toast notifications when chatbot is thinking!
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationCircleIcon className="w-8 h-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotMessages;

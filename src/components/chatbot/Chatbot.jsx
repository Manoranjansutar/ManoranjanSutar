import React, { useEffect, useState } from 'react';
import chatbot from './../../assets/robot-assistant.png';
import Lottie from 'lottie-react';
import cross from './../../assets/gif json/cross.json';



const ChatBot = ({showChatBot,setShowChatBot}) => {
    const chatFlowData = {
        initial: {
          message: "Hi I'm Manobot. I'm here to help you with any questions you might have about my work.",
          options: [
            { id: 'hello', text: 'Just saying Hello! 👋' },
            { id: 'hire', text: "I'd like to hire you" },
            { id: 'email', text: 'Send an email' },
          ],
        },
        hello: {
          message: [
            {id:1, text:"Hello 👋"},
            {id:2, text:"Thanks for saying Hi!"},
            {id:3, text:"Hope you are having a great day! 🎉"},
            {id:4, text:"Is there anything else I can help you with?"}
          ],
          options: [
            { id: 'hire', text: "I'd like to hire you" },
            { id: 'email', text: 'Send an email' }
          ],
        },
        hire: {
          message: [
                {id:5, text:"Great!"},
                {id:6, text:"I'm excited! 🎉"},
                {id:7, text:"Send me a project request!"},
                {id:8, text:"We'll talk further about your project"}
        
          ],
          options: [
            { id: 'email', text: 'Send an email' }
          ],
        },
        email: {
          message: [
                {id:9, text:"Here you go!"},
                {id:10, text:"sutar.manoranjan90@gmail.com"},
                {id:11, text:"Have a good day 🎉"}
          ],
        },
        // Add more conversation paths as needed
      };


      const [conversation, setConversation] = useState([]);
      const [currentState, setCurrentState] = useState('initial');
      const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    
      useEffect(() => {
        if (currentState === 'initial' && conversation.length === 0) {
          setConversation([{ sender: 'bot', text: chatFlowData.initial.message }]);
        }
      }, []);
    
      useEffect(() => {
        if (chatFlowData[currentState] && Array.isArray(chatFlowData[currentState].message)) {
          const messages = chatFlowData[currentState].message;
          if (currentMessageIndex < messages.length) {
            const timer = setTimeout(() => {
              setConversation(prev => [...prev, { sender: 'bot', text: messages[currentMessageIndex].text }]);
              setCurrentMessageIndex(prevIndex => prevIndex + 1);
            }, 1000);
            return () => clearTimeout(timer);
          }
        }
      }, [currentState, currentMessageIndex]);
    
      const handleOptionClick = (optionId) => {
        const newUserMessage = { sender: 'user', text: chatFlowData[currentState].options.find(opt => opt.id === optionId).text };
        setConversation(prev => [...prev, newUserMessage]);
        setCurrentState(optionId);
        setCurrentMessageIndex(0);
      };   

  return (
    <div className="flex flex-col bg-gray-100 w-96" style={{height:"500px"}}>
    <div className="flex items-center justify-between p-3 bg-black">
       <img src={chatbot} alt="Monobot" className="w-8 h-8 mr-2 rounded-full" />
       <h1 className="items-center mr-auto font-bold text-white space-mono-regular">Manobot</h1>
      <div style={{width:"25px"}} onClick={()=>{setShowChatBot(false)}}><Lottie animationData={cross} /></div>
    </div>
    <div className="flex-1 p-4 space-y-4 overflow-y-auto">
      {conversation.map((msg, index) => (
        <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div className={`p-4 rounded-xl space-mono-regular ${msg.sender === 'user' ? 'bg-white text-black' : 'bg-black text-white'}`}>
            {msg.text}
          </div>
        </div>
      ))}
    </div>
    <div className="p-4 bg-white">
      <div className="flex flex-col space-y-2">
        {chatFlowData[currentState]?.options?.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(option.id)}
            className="w-full p-2 text-black bg-[rgb(9,244,244,1)] rounded hover:bg-gray-800  space-mono-regular hover:text-white"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  </div>
  );
};

export default ChatBot;

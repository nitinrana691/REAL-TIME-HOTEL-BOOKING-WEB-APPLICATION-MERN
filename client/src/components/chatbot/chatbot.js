// src/components/Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css';
import { FaComments } from 'react-icons/fa'; // Using react-icons for the chat icon

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Chatbot Button */}
      <button className="chatbot-button" onClick={toggleChatbot} aria-label="Open chat">
        <FaComments size={24} />
      </button>

      {/* Chatbot Window*/ }
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>Chat with us!</h4>
            <button className="close-button" onClick={toggleChatbot} aria-label="Close chat">
              &times;
            </button>
          </div>
          <iframe
            title="Dialogflow Chatbot"
            width="100%"
            height="100%"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/42f52e1f-fa4c-46cd-bb05-e4987a0858a8"
            frameBorder="0"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default Chatbot;
// src/components/Chatbot.js
/*import React, { useState, useEffect } from 'react';
import './Chatbot.css';
import { FaComments } from 'react-icons/fa'; // Using react-icons for the chat icon

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      // Add Zoho SalesIQ scripts dynamically when chatbot is opened
      const script1 = document.createElement('script');
      script1.type = 'text/javascript';
      script1.innerHTML = `
        window.$zoho=window.$zoho || {};
        $zoho.salesiq=$zoho.salesiq||{ready:function(){}};
      `;
      document.body.appendChild(script1);

      const script2 = document.createElement('script');
      script2.id = 'zsiqscript';
      script2.src = 'https://salesiq.zohopublic.in/widget?wc=siq7017409ed948bd27419cad6fef23d08f8f87e9119664ba487e48e736426b1559';
      script2.defer = true;
      document.body.appendChild(script2);

      return () => {
        // Cleanup the scripts when chatbot is closed
        document.body.removeChild(script1);
        document.body.removeChild(script2);
      };
    }
  }, [isOpen]);

  return (
    <>
     

      {/* Chatbot Window 
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>Chat with us!</h4>
            <button className="close-button" onClick={toggleChatbot} aria-label="Close chat">
              &times;
            </button>
          </div>
          {/* Placeholder for Zoho Chatbot 
          <div className="chatbot-content">
            <p>Zoho SalesIQ Chat is active!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;*/


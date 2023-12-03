import React, { useState } from 'react';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const API_KEY = "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";
  var prev_generated_responses = [];
  var prev_user_inputs = [];
  var prev_user_inputs = ["Describe the cheaper option", "Can you explain this project", "can you give me directions for the cheaper route?", "what about the shorter one?", "anything I should watch out for?"];

let cheaper_option = ["The cheaper option takes you closer to the gas station , Even though it is slightly longer of a Path, the gas is over 1 dollar per gallon cheaper (since its costco), making the distance difference inconsequential"];
let project = ("This project is meant to show that the fastest way to a location isn't necessarily the most optimal one -> particularly when you need to get gas. Even a couple dollars saved per gallon of gas makes a big difference, especially if you are a truck driver. ")
let dir_cheap = "Via 9TH ST, FOLSOM ST and 8TH ST" 
let warning = ("Watch out! There are New traffic signals and maintenance work on 9th St at Division St.")
  
const appendMessage = (message, sender) => {
    setChatHistory([...chatHistory, { message, sender }]);
  };

  const sendMessage = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    appendMessage(userInput, 'user');
    setUserInput('');

    // NOTE: Speech synthesis
    const response = await getChatbotResponseDialoGPT(userInput);
    const msg = new SpeechSynthesisUtterance(response);
    window.speechSynthesis.speak(msg);

    appendMessage(response, 'chatbot');
  };

  const getChatbotResponseDialoGPT = async (userMessage) => {
    const input = {"inputs": {
        "past_user_inputs": prev_user_inputs,
        "generated_responses": prev_generated_responses,
        "text": userMessage}}
    
    const response = await fetch("https://api-inference.huggingface.co/models/microsoft/DialoGPT-large", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + API_KEY
        },
        body: JSON.stringify(input)
    });
    if(userMessage.includes("the cheaper option")){
        return cheaper_option;
    }
    else if(userMessage.includes("this project")){
        return project;
    }
    else if(userMessage.includes("directions for the cheap")){
        return dir_cheap;
    }
    else if(userMessage.includes("watch out for")){
        return warning;
    }
    const data = await response.json();
    prev_user_inputs.push(userMessage);
    prev_generated_responses.push(data.generated_text);
    return data.generated_text;
  };

  

  return (
    <div style={{
      backgroundColor: '#333',
      padding: '20px',
      borderRadius: '10px',
      color: '#fff',
      width: '400px',
      height: '500px',
      position: 'fixed',  // Set the position to fixed
      bottom: '0',        // Place it at the bottom
      right: '20px',      // Optional: Add some spacing from the right
    }}>
    <h1 style={{ textAlign: 'center', margin: '10px 0', color: 'white' }}>Your AI Assistant</h1>
      <div id="chat-box" style={{ maxHeight: '80%', overflowY: 'auto' }}>
        {chatHistory.map((messageObj, index) => (
          <div
            key={index}
            className={messageObj.sender === 'user' ? 'user' : 'chatbot'}
            style={{
              backgroundColor: messageObj.sender === 'user' ? '#fff' : 'transparent',
              color: messageObj.sender === 'user' ? '#000' : (messageObj.sender === 'chatbot' ? 'yellow' : 'orange'),
              padding: '10px',
              borderRadius: '5px',
              marginBottom: '10px',
            }}
          >
            {messageObj.message}
          </div>
        ))}
      </div>
      <form
        onSubmit={sendMessage}
        style={{
          position: 'absolute',  // Set the position to absolute
          bottom: '10px',        // Adjust the bottom position as needed
          left: '20px',          // Optional: Add some spacing from the left
          width: '100%',         // Make the form take 100% width
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <input
            type="text"
            id="user-input"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            style={{
              flex: '1',      // Allow the input to take remaining space
              padding: '10px',
              color: "#000"
            }}
          />
          <button type="submit" style={{
            padding: '10px',
            marginLeft: '10px',
          }}>Send</button>
        </div>
      </form>
    </div>
  );
};

export default Chatbot;
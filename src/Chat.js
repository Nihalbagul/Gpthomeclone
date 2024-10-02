import React,{useState} from "react";

import './Chat.css';

const Chat = () => {
    const [message,setMessage] = useState("");
    const [inputMessage, setInputMessage] = useState("");
    const handleSubmit = (e) => {
        
        if(inputMessage.trim() === '') return;
        const newMessage = {
             id :message.length,
             // eslint-disable-next-line no-undef
             text: inputValue,
             timestamp: new Date().getTime(),
        }
        setMessage([...message, newMessage]);
        setInputMessage("");
    };


    return (
        <div className="chat">
            <div className="chat__header">
                <h3>Chat App</h3>
            </div>
            < div className="messages">
                {message.map((message) => (
                    <div key ={message.id} className="message">
                        <span className="timestamp">
                            (message.timestamp)
                        </span>
                        <p>{message.text}</p>
                    </div>
                    ))}
            </div>  
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Type a message"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                />
                <button onClick={handleSubmit}>Send</button>
            </div>
            <button onClick={handleSubmit}>Send</button>
        </div>
    );
}


export default Chat;
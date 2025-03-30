import { useState } from "react";
import Message from "./Message";
import "../styles.css";

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello!", isSent: true },
    { text: "Hi! How are you?", isSent: false },
    { text: "I'm good, thanks!", isSent: true },
  ]);

  return (
    <div className="chat-container">
      {messages.map((msg, index) => (
        <Message key={index} text={msg.text} isSent={msg.isSent} />
      ))}
    </div>
  );
};

export default Chat;

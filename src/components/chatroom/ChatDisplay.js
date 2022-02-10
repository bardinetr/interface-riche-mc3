import React, {useRef, useEffect} from "react";
import Message from "./Message";
import "./Chatroom.css";

const ChatDisplay = (props) => {
  const chat = props.msgList.map((msg) => (
    <Message msgjson={msg} username={props.username}></Message>
  ));

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    var objDiv = document.getElementById("chat");
    objDiv.scrollTop = objDiv.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [props]);

  return (
    <div id="chat" className="Chat-display">
      {chat}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatDisplay;

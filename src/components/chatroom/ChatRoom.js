import React, {useState, useEffect} from "react";
import ChatDisplay from "./ChatDisplay";
import ChatInput from "./ChatInput";
import "./Chatroom.css";
const ChatRoom = () => {
  const [ws, setState] = useState(
    new WebSocket("wss://imr3-react.herokuapp.com")
  );
  const [connected, setConnected] = useState(false);
  const [messageList, setMessageList] = useState([]);
  const [username, setUsername] = useState("RomainBardinetINFO3");

  function addMessage(msg) {
    console.log("msg", msg);
    setMessageList((messageList) => [...messageList, msg]);
    //ws.send(JSON.stringify(msg));
  }

  function sendMessage(msg) {
    console.log("sending msg", msg);
    submitMessage(msg);
    //addMessage(msg);
  }

  ws.onopen = () => {
    console.log("connected");
    setConnected(true);
  };

  ws.onmessage = (evt) => {
    const messages = JSON.parse(evt.data);
    messages.map((message) => addMessage(message, false));
  };

  ws.onclose = () => {
    console.log("disconnected, reconnect.");
    setConnected(false);
    setState(new WebSocket("wss://imr3-react.herokuapp.com"));
    setMessageList([]);
  };

  function submitMessage(messageString) {
    const message = {
      name: username,
      message: messageString.message,
      when: messageString.when,
      moment: messageString.moment,
    };
    ws.send(JSON.stringify(message));
  }

  return (
    <div className="Chatroom">
      <p>ChatRoom</p>
      <ChatDisplay msgList={messageList} username={username}></ChatDisplay>
      <ChatInput
        onSendMessage={(msg) => {
          sendMessage(msg, false);
        }}
        username={username}
      ></ChatInput>
      {/* <button
        onClick={() => {
          sendMessage(message_mock);
        }}
      >
        Add Message In
      </button>
      <button
        onClick={() => {
          sendMessage(message_mock_out);
        }}
      >
        Add Message Out
      </button> */}
    </div>
  );
};

export default ChatRoom;

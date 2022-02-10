import React, {useState, useEffect} from "react";
import "./Chatroom.css";

const ChatInput = (props) => {
  const [msg, setMsg] = useState("");
  const [moment, setMoment] = useState(null);
  function sendMsgToChatRoom() {
    if (msg !== "") {
      if (moment === "") {
        setMoment(null);
      }
      console.log("sending message to parent");
      let msgjson = {
        message: msg,
        when: Date.now(),
        name: props.username,
        moment: moment,
      };
      props.onSendMessage(msgjson, true);
      setMsg("");
      setMoment(null);
    }
  }
  function enterMsgToChatRoom(e) {
    if (e.key === "Enter") {
      console.log("do validate");
      sendMsgToChatRoom();
    }
  }
  return (
    <>
      <div className="Input-room">
        <input
          className="Input-box"
          onChange={(e) => setMsg(e.target.value)}
          onKeyDown={(e) => enterMsgToChatRoom(e)}
          value={msg}
        ></input>
        <button onClick={() => sendMsgToChatRoom()}>Send</button>
      </div>
      <div className="Input-room">
        <span className="Input-moment"> Enter a specific moment here : </span>
        <input
          className="Input-moment"
          onChange={(e) => setMoment(e.target.value)}
          value={moment}
        ></input>
      </div>
    </>
  );
};

export default ChatInput;

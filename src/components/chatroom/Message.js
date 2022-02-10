import React from "react";
import "./Message.css";

const Message = (props) => {
  return (
    <div
      className={
        props.msgjson.name === props.username
          ? "Message-flex-out"
          : "Message-flex-in"
      }
    >
      <div
        className={
          props.msgjson.name === props.username ? "Message-out" : "Message-in"
        }
      >
        <div className="Message-name">{props.msgjson.name}</div>
        {props.msgjson.message}
        <div className="Message-moment">
          {(() => {
            if (props.msgjson.moment) {
              return <span className="Message-moment-text">moment : </span>;
            }
          })()}
          {(() => {
            if (props.msgjson.moment) {
              return props.msgjson.moment;
            }
          })()}
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {};

export default Message;

import React from "react";
import "./DisplayMovie.css";

const ListChapters = (props) => {
  const listOfChapters = props.chapters.map((chapter) => (
    <li key={chapter.pos}>
      <div className="Word-line">
        <div>
          {chapter.pos}, {chapter.title}
        </div>{" "}
        <button
          onClick={() => {
            if (chapter.pos === props.selectedtimestamp) {
              props.onClearTimestamp();
            } else {
              props.onSelectedTimestamp(chapter.pos);
            }
          }}
          className={chapter.pos === props.selectedtimestamp ? "Focus-btn" : ""}
        >
          Focus
        </button>
      </div>
    </li>
  ));

  return (
    <div style={{"flex-grow": "3"}}>
      <ul>{listOfChapters}</ul>
    </div>
  );
};

export default ListChapters;

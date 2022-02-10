import React, {useState, useEffect} from "react";
import "./Map.css";

const WordList = (props) => {
  const [listOfWords, setListOfWords] = useState(null);
  const getList4Pos = (array) => {
    return array.map((word) => (
      <li key={word.title}>
        {word.title}, <a href={word.url}>see wiki</a>
      </li>
    ));
  };

  useEffect(() => {
    const newlistOfWords = props.Keywords.map((keyword) => {
      if (
        keyword.pos === props.selectedtimestamp ||
        props.selectedtimestamp === null
      )
        return (
          <li key={keyword.pos}>
            <p></p>
            <ul>
              timestamp : {keyword.pos}
              {getList4Pos(keyword.data)}
            </ul>
          </li>
        );
      return null;
    });
    setListOfWords(newlistOfWords);
  }, [props]);

  return (
    <div className="Wordlist">
      <ul>{listOfWords}</ul>
    </div>
  );
};

export default WordList;

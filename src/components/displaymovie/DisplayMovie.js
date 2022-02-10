import React, {useState, useEffect} from "react";
import ListChapters from "./ListChapters";
import VideoPlayer from "./VideoPlayer";
import Map from "../map/Map";
import WordList from "../map/WordList";
import "./DisplayMovie.css";
import {FiChevronsLeft, FiChevronsRight} from "react-icons/fi";

const DisplayMovie = () => {
  const [json, setJson] = useState({
    Chapters: [],
    Film: {},
    Waypoints: [],
    Keywords: [],
  });

  const [selectedTimestamp, setSelectedTimestamp] = useState(null);

  const fetchJSON = async () => {
    //setJson(DummyJSON);
    let res = await fetch("https://imr3-react.herokuapp.com/backend");
    let resjson = await res.json();
    console.log("resjson =>", resjson);
    setJson((json) => resjson);
    return resjson;
  };

  return (
    <div>
      <div className="Fetch-movie">
        <FiChevronsRight className="Arrow-icon" size={40} />
        <button onClick={fetchJSON}>Load Movie JSON</button>
        <FiChevronsLeft className="Arrow-icon" size={40} />
      </div>
      <p>Movie & Timestamps</p>
      <div className="Movie-container">
        <ListChapters
          chapters={json.Chapters}
          onSelectedTimestamp={(e) => {
            setSelectedTimestamp(e);
          }}
          onClearTimestamp={() => {
            setSelectedTimestamp(null);
          }}
          selectedtimestamp={selectedTimestamp}
        >
          List Chapters
        </ListChapters>
        <VideoPlayer filmdata={json.Film}></VideoPlayer>
      </div>

      <p>Map & Keywords</p>
      <div className="Map-container">
        <Map
          markersJSON={json.Waypoints}
          selectedtimestamp={selectedTimestamp}
        ></Map>
        <WordList
          Keywords={json.Keywords}
          selectedtimestamp={selectedTimestamp}
        ></WordList>
      </div>
    </div>
  );
};

export default DisplayMovie;

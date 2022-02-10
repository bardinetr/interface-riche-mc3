import React, {useState, useEffect} from "react";
import ReactPlayer from "react-player";

const VideoPlayer = (props) => {
  const [filmdata, setFilmData] = useState({});

  function VideoContainer(props) {
    console.log("in video container, filmdata = ", props.filmdata);
    if (
      props.filmdata.file_url !== undefined &&
      props.filmdata.file_url !== ""
    ) {
      console.log("returning ReactPlayer component");
      // return <ReactPlayer url={props.filmdata.file_url} />;
      return <ReactPlayer url={props.filmdata.file_url} controls={false} />;
    }
    return <></>;
  }

  useEffect(() => {
    setFilmData(props.filmdata);
    //VIDEOPLAYER RELOADS EVERY TIMESTAMP SELECTION ALTHO ITS PROPS DO NOT CHANGE!!
  }, [props]);

  return (
    <div>
      <VideoContainer filmdata={filmdata}></VideoContainer>
    </div>
  );
};

export default VideoPlayer;

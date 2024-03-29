import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import SummaryModal from "./Modal.js";
import infobutton from "./info-button.png";

const Hero = ({setCardModalData}) => {
  const [id, setID] = useState();
  const [mediaType, setMediaType] = useState();
  const [key, setKey] = useState();
  const [videoURL, setVideoURL] = useState();
  const [playing, setPlaying] = useState(false);
  const [mute, unMute] = useState(false);

  function startPlay() {
    setPlaying(true);
  }
  function stopPlay() {
    setPlaying(false);
  }

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=62be9389e81a8c75366a852f32ce210a"
    )
      .then((res) => res.json())
      .then((res) => {
        setID(res.results[0].id);
        setMediaType(res.results[0].media_type);
        console.log(res.results[0])
        console.log(res.results);
        let url = `https://api.themoviedb.org/3/${res.results[0].media_type}/${res.results[0].id}/videos?api_key=62be9389e81a8c75366a852f32ce210a&language=en-US`;
        console.log(url);
        fetch(url)
          .then((res) => res.json())
          .then((res) => {
            setKey(res.results[0].key);
          });
      });
  }, []);

  useEffect(() => {
    console.log("key", key);
    setVideoURL(
      key
        ? `https://www.youtube.com/watch?v=${key}/modestbranding=1&showinfo=0&fs=0&rel=0`
        : ""
    );
    console.log(videoURL);
  }, [key]);

  return (
    <div className="hero-row row">
      <ReactPlayer
        muted={true}
        controls={true}
        playing={playing}
        onMouseOver={startPlay}
        onMouseLeave={stopPlay}
        url={videoURL}
        loop={true}
        height="100%"
        width="100%"
      />
      <button className="info-tag" onClick={() => {
        console.log("id", id)
        setCardModalData({id: id, media_type: mediaType})
    }}>
        <img alt='info button' src={infobutton}></img>
      </button>
    </div>
  );
};

export default Hero;

import React, { useState, useEffect } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
// import infobutton from './info-button.png'
import ReactPlayer from "react-player";

export default function SummaryModal({
  className,
  setCardModalData,
  cardModalData,
}) {
  // const [open, setOpen] = useState(false);
  const [info, setInfo] = useState();
  const [key, setKey] = useState();
  let videoURL = `https://www.youtube.com/watch?v=${key?.key}`;

  const onCloseModal = () => setCardModalData(false);

  const { media_type, id } = cardModalData;

  useEffect(() => {
    fetch(
      "https:/" +
        `/api.themoviedb.org/3/${media_type}/${id}?api_key=62be9389e81a8c75366a852f32ce210a&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setInfo(res);
      });
    fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=62be9389e81a8c75366a852f32ce210a&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => {
        setKey(res.results[0]);
      });
  }, [media_type, id]);
  return (
    <>
      {info && (
        <div className={className}>
          <Modal open={true} onClose={onCloseModal} center>
            <h2>{info.name}</h2>
            <ReactPlayer url={videoURL} />
            <p>{info.overview}</p>
            {media_type !== "tv" && <p>Run Time: {info.runtime} minutes</p>}
          </Modal>
        </div>
      )}
    </>
  );
}

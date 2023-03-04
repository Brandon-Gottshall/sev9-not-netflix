import React, { useState, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
// import infobutton from './info-button.png'
import ReactPlayer from 'react-player'


export default function SummaryModal({id=13, className, setCardModalData, cardModalData }) {
  // const [open, setOpen] = useState(false);
  const [info, setInfo] = useState();
  const [key, setKey] = useState();
  let videoURL = `https://www.youtube.com/watch?v=${key?.key}`

  // const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setCardModalData(false);

  useEffect(() => {
    // if a movie is passed in, don't look up
    console.log(cardModalData, id);
   if (cardModalData) {
    console.log(cardModalData)
      setInfo(cardModalData);
      id = cardModalData.id;
    } else {
      fetch(`https://api.themoviedb.org/3/${info.media_type}/${id}?api_key=62be9389e81a8c75366a852f32ce210a&language=en-US`)
        .then(res => res.json())
        .then(res => {
          setInfo(res)
        })
      }
    // }, [])

// useEffect(()=> {
  console.log(info)
  if(!info){
    return
  }
  fetch(`https://api.themoviedb.org/3/${info?.media_type}/${id}/videos?api_key=62be9389e81a8c75366a852f32ce210a&language=en-US`)
    .then(res => res.json())
    .then(res => {
      setKey(res.results[0])
    })
}, [])

  return (
    <div className={className}>
      <Modal open={true} onClose={onCloseModal} center>
        <h2>Film Title: {info?.original_title}</h2>
        <ReactPlayer url={videoURL} />
        <p>{info?.overview}</p>
        <p>Run Time: {info?.runtime} minutes</p>

      </Modal>
    </div>
  );
};

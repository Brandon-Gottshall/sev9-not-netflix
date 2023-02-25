import React, { useState, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import infobutton from './info-button.png'
import ReactPlayer from 'react-player'


export default function SummaryModal  ({ id = 13 }) {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState();
  const [key, getKey] = useState();
  let videoURL = `https://www.youtube.com/watch?v=${key?.key}`

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=62be9389e81a8c75366a852f32ce210a&language=en-US`)
      .then(res => res.json())
      .then(res => {
        setInfo(res)
      })
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=62be9389e81a8c75366a852f32ce210a&language=en-US`)
      .then(res => res.json())
      .then(res => {
      getKey(res.results[0])
      })
  }, [])
  return (
    <div>
      <button className='info-tag' onClick={onOpenModal}><img src={infobutton} height="15px" width='15px'></img></button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Film Title: {info?.original_title}</h2>
        <ReactPlayer url={videoURL}/>
        <p>{info?.overview}</p>
        <p>Run Time: {info?.runtime} minutes</p>

      </Modal>
    </div>
  );
};

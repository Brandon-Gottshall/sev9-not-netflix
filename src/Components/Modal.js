import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import infobutton from './info-button.png'

const SummaryModal = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <button className ='info-tag' onClick={onOpenModal}><img src={infobutton} height='15px' width='15px'></img></button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Film Title</h2>
        <p>This is where the video goes</p>
        <p>Film Synopsis</p>
        <p>Run Time</p>
      </Modal>
    </div>
  );
};

export default SummaryModal
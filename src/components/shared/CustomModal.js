import React from "react";
import { Modal, Button, CloseButton } from "react-bootstrap";
import {useHistory} from 'react-router-dom';
const CustomModal = ({
  show,
  handleClose,
  callback,
  introvert,
  extrovert,
  result,
}) => {
  let history = useHistory();
  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Result</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{introvert} % introvert</p>
        <p>{extrovert} % extrovert</p>
        <p>you are {result}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>{handleClose(); history.push('/'); }}>
          Close
        </Button>
        <Button variant="primary" onClick={callback}>
          Try Again
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;

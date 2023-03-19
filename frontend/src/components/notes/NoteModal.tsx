import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import styles from "../../styles/Note.module.css";


export interface ModalProps {
    title?: string,
    text?: string,
    show: boolean,
    handleClose: () => void,
}

export default function NoteModal({title, text, show, handleClose}: ModalProps) {
  return (
    <Modal centered show={show} onHide={handleClose}>
        <Modal.Header className={`${styles.noteModal}`} closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${styles.noteModal}`}>{text}</Modal.Body>
        <Modal.Footer className={`${styles.noteModal}`}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

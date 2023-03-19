import React from 'react'
import { ModalProps } from './NoteModal'
import { Button, Modal } from 'react-bootstrap'
import styles from "../../styles/Note.module.css";
import FormInputField from '../form/FormInputField'
import { useForm } from 'react-hook-form';

interface AddEditNoteModalProps extends ModalProps {
    isEditing?: boolean,
}

interface AddEditNoteField {
    title: string,
    text: string
}

export default function AddEditNoteModal({title, text, show, handleClose, isEditing}:AddEditNoteModalProps) {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        watch,
      } = useForm<AddEditNoteField>();
    //   const { login } = useContext(AppContext);

  return (
    <Modal centered show={show} onHide={handleClose}>
        <Modal.Header className={`${styles.noteModal}`} closeButton>
          <Modal.Title>{isEditing ? 'Edit Note' : 'Add Note'}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${styles.noteModal}`}>
            <FormInputField name="title"
            // label={isEditing? title: 'Add Title'}
            placeholder={isEditing? title: 'Add Title'}
            register={register}
            error={errors.title}
            registerOptions={{ required: true }}
            type="text"/>
            <FormInputField name="text"
            placeholder={isEditing? text: 'Add Text'}
            register={register}
            error={errors.text}
            registerOptions={{ required: true }}
            type="text"
            as='textarea'
            rows={4}/>
        </Modal.Body>
        <Modal.Footer className={`${styles.noteModal}`}>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
          {isEditing? 'Save Edit': 'Save Note'}
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

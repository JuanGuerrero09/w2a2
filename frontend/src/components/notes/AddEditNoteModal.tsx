import React, { useContext } from "react";
import { ModalProps } from "./NoteModal";
import { Button, Modal, Form } from "react-bootstrap";
import styles from "../../styles/Note.module.css";
import FormInputField from "../form/FormInputField";
import { useForm } from "react-hook-form";
import { AppContext } from "../../context/AppContext";
import { NoteInput } from "../../network/api";

interface AddEditNoteModalProps extends ModalProps {
  id: string
  isEditing?: boolean;
}

interface AddEditNoteField {
  title: string;
  text: string;
}

export default function AddEditNoteModal({
  title,
  text,
  show,
  id,
  handleClose,
  isEditing,
}: AddEditNoteModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<AddEditNoteField>({
    defaultValues: {
        title: title || "",
        text: text || "",
    }
});
  const { createNote, updateNote } = useContext(AppContext);
  
  const onSubmit = async (data: AddEditNoteField) => {
    try {
      console.log(id, data)
      isEditing 
      ? await updateNote({noteId: id, note: data})
      : await createNote(data);
    } catch (error) {}
  };

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header className={`${styles.noteModal}`} closeButton>
        <Modal.Title>{isEditing ? "Edit Note" : "Add Note"}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${styles.noteModal}`}>
        <Form id="addEditNoteForm" onSubmit={handleSubmit(onSubmit)}>
          <FormInputField
            name="title"
            // label={isEditing? title: 'Add Title'}
            placeholder={isEditing ? title : "Add Title"}
            register={register}
            error={errors.title}
            registerOptions={{ required: true }}
            type="text"
          />
          <FormInputField
            name="text"
            className={`mt-1 p-2`}
            placeholder={isEditing ? text : "Add Text"}
            register={register}
            error={errors.text}
            registerOptions={{ required: true }}
            type="text"
            as="textarea"
            rows={4}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer className={`${styles.noteModal}`}>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" form="addEditNoteForm" variant="primary" onClick={handleClose}>
          {isEditing ? "Save Edit" : "Save Note"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

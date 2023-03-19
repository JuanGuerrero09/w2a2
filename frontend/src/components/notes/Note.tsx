import { Card, Modal, Button } from "react-bootstrap";
import { NoteModel } from "../../models/note";
import styles from "../../styles/Note.module.css";
// import stylesUtils from '../styles/utils.module.css'
import { formatDate } from "../../utils/dateFunctions";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface NoteProps {
  note: NoteModel;
  onClickEvent: "openModal" | "openNotesPage";
  onDeleteNoteClick?: (note: NoteModel) => void;
  className?: string;
}

export default function Note({ note, onClickEvent }: NoteProps) {
  const { title, text, createdAt, updatedAt, _id } = note;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let createdUpdatedText: string;
  const navigate = useNavigate();

  if (updatedAt > createdAt) {
    createdUpdatedText = "Updated: " + formatDate(updatedAt);
  } else {
    createdUpdatedText = "Created at: " + formatDate(createdAt);
  }

  const onClickHandler =
    (onClickEvent: "openModal" | "openNotesPage") =>
    (event: React.MouseEvent) => {
      event.preventDefault();
      if (onClickEvent === "openModal") {
        handleShow();
      }
      if (onClickEvent === "openNotesPage") {
        navigate("/notes");
      }
    };

  return (
    <>
      <Card
        onClick={onClickHandler(onClickEvent)}
        className={`${styles.noteCard}`}
      >
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.cardTitle}>
            {title}
            <MdDelete
              className="text-muted ms-auto"
              onClick={(e) => {
                console.log("note clicked" + _id);
                e.stopPropagation();
              }}
            />
          </Card.Title>
          <Card.Text className={styles.cardText}>{text}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{createdUpdatedText}</Card.Footer>
      </Card>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header className={`${styles.noteModal}`} closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${styles.noteModal}`}>{text}</Modal.Body>
        <Modal.Footer className={`${styles.noteModal}`}>
        {createdUpdatedText}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

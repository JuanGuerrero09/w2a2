import { Card } from "react-bootstrap";
import { NoteModel } from "../../models/note";
import styles from "../../styles/Note.module.css";
// import stylesUtils from '../styles/utils.module.css'
import { useContext, useState } from "react";
import { MdDelete, MdEditDocument } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/dateFunctions";
import NoteModal from "./NoteModal";
import { AppContext } from "../../context/AppContext";
import AddEditNoteModal from "./AddEditNoteModal";
import { EditNoteIcon } from "../icons/AddEditNoteIcon";

interface NoteProps {
  note: NoteModel;
  onClickEvent: "openModal" | "openNotesPage";
  onDeleteNoteClick?: (note: NoteModel) => void;
  className?: string;
}

export default function Note({ note, onClickEvent }: NoteProps) {
  const { title, text, createdAt, updatedAt, _id, author } = note;
  const { deleteNote, partner } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const partnerId = partner? partner._id : null

  const handleClose = () => {
    setShow(false)
    isEditing? setIsEditing(false): isEditing
  };
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
        border={author === partnerId? 'danger' : 'primary'}
      >
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.cardTitle}>
            {title}
            <aside className="text-muted ms-auto">
              <MdEditDocument 
              onClick={(e) => {
                console.log("note clicked" + _id);
                e.stopPropagation();
                setIsEditing(true)
              }}
              />
              <MdDelete
                onClick={async (e) => {
                  e.stopPropagation();
                  console.log("note clicked " + _id);
                  await deleteNote(_id)
                }}
              />
            </aside>
          </Card.Title>
          <Card.Text className={styles.cardText}>{text}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{createdUpdatedText}</Card.Footer>
      </Card>

      <AddEditNoteModal
        isEditing
        id={_id}
        handleClose={handleClose}
        show={isEditing}
        text={text}
        title={title}
      />
      <NoteModal
        handleClose={handleClose}
        show={show}
        text={text}
        title={title}
      />
    </>
  );
}

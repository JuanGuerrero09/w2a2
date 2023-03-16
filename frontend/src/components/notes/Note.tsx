import { Card } from "react-bootstrap"
import { NoteModel } from "../../models/note"
import styles from "../../styles/Note.module.css";
// import stylesUtils from '../styles/utils.module.css'
// import { formatDate } from "../utils/formatDate";
// import { MdDelete } from 'react-icons/md'

interface NoteProps {
  note: NoteModel,
  onNoteClicked?: (note:NoteModel) => void,
  onDeleteNoteClick?: (note: NoteModel) => void,
  className?: string
}

export default function Note({ note }:NoteProps) {
  const {title, text } = note

  // let createdUpdatedText:string

//   if (updatedAt > createdAt){
//     createdUpdatedText = 'Updated: ' + formatDate(updatedAt)
//   } else{
//     createdUpdatedText = 'Created at: ' + formatDate(createdAt)
//   }

  return (
    <Card className={`${styles.noteCard}`} >
      <Card.Body className={styles.cardBody}>
        <Card.Title >
          Hola mundo
          {/* <MdDelete className="text-muted ms-auto" onClick={(e) => {
            onDeleteNoteClick(note)
            e.stopPropagation()
            } }/> */}
        </Card.Title>
        <Card.Text className={styles.cardText}>Hola mundo</Card.Text>
      </Card.Body>
        {/* <Card.Footer className="text-muted">{createdUpdatedText}</Card.Footer> */}
    </Card>
  )
}

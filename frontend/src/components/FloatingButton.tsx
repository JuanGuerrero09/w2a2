// @ts-ignore
import { Container, Button, Link } from "react-floating-action-button";
import {AddNoteIcon} from "./icons/AddEditNoteIcon";
import PlusIcon from "./icons/PlusIcon";
import { useState } from "react";
import AddEditNoteModal from "./notes/AddEditNoteModal";

export default function FloatingButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        {/* <Link href="#" tooltip="Create note link" icon="far fa-sticky-note" />
        <Link href="#" tooltip="Add a new note">
    </Link> */}
        <Button onClick={handleShow} tooltip='Create new note'>
          <AddNoteIcon />
        </Button>
      </Container>
      <AddEditNoteModal handleClose={handleClose} show={show} />
    </>
  );
}

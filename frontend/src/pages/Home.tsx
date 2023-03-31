import { useContext, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Note from "../components/notes/Note";
import { NoteModel } from "../models/note";
import { getLastDraw, getLastNote } from "../utils/dateFunctions";
import HomeStyles from "../styles/Home.module.css";
import Countdown from "../components/countdowns/Countdown";
import CanvasSketch from "../components/canvas/CanvasSketch";
import { DrawModel } from "../models/draw";
import DrawHolder from "../components/canvas/DrawHolder";
import { useForm } from "react-hook-form";
import FormInputField from "../components/form/FormInputField";

const firstNote: NoteModel = {
  title: "Hi! Create your first note here!",
  text: "Click to go to the notes page",
  _id: "213121",
  author: 'user',
  createdAt: "today",
  updatedAt: "tomorrow",
};

const firstDraw: DrawModel = {
  _id: "420",
  createdAt: "today",
  img: "",
};

interface AddPartnerFields {
  partnerUsername: string;
}

export default function Home() {
  const { user, partner, logout, getNotes, notes, drawsContext, getPartner, addPartner } =
    useContext(AppContext);
  const { draws, getDraws } = drawsContext;
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {}
  };

  useEffect(() => {
    !notes && getNotes();
    !draws && getDraws();
    !partner && getPartner();
  }, []);
  const lastNote: NoteModel =
    notes?.length > 0 ? getLastNote(notes) : firstNote;
  const lastDraw: DrawModel =
    draws?.length > 0 ? getLastDraw(draws) : firstDraw;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<AddPartnerFields>({
    defaultValues: {
      partnerUsername: "",
    },
  });
  console.log(notes)

  const onSubmit = async (data: AddPartnerFields) => {
    try {
      const partner = await addPartner(data)
      console.log(partner)
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <main className={HomeStyles.HomePage}>
      <section className={HomeStyles.Greeting}>
        <h1>
          Hello, <strong>{user?.partnername}</strong>
        </h1>
        {partner ? (
          <h4>Current Partner: {partner.partnername}</h4>
        ) : (
          <div>
            <h4>Add Partner</h4>
            <Form className="d-flex align-items-center" id="addPartnerForm" onSubmit={handleSubmit(onSubmit)}>
              <FormInputField
                name="partnerUsername"
                placeholder={"Write your partner username"}
                register={register}
                error={errors.partnerUsername}
                registerOptions={{ required: true }}
                type="text"
              />
              <Button className="ml-4" type="submit">Add Partner</Button>
            </Form>
          </div>
        )}
      </section>
      <div className={HomeStyles.Content}>
        <section className={HomeStyles.NotesSection}>
          <h4>{partner ? "Our" : "Your"} Notes:</h4>
          <Note note={lastNote} onClickEvent="openNotesPage" />
        </section>
        <section className={HomeStyles.CountdownsSection}>
          <h4>{partner ? "Our" : "Your"} Countdowns</h4>
          <Countdown />
        </section>
        <section className={HomeStyles.CountdownsSection}>
          <h4>{partner ? "Our" : "Your"} Draws</h4>
          <DrawHolder draw={lastDraw} />
        </section>
      </div>
      {/* <p>{JSON.stringify(notes)}</p> */}
      <Button onClick={handleLogOut}>Log out</Button>
    </main>
  );
}

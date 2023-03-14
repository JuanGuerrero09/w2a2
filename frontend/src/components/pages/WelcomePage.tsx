import WorldIcon from "../icons/WorldIcon";
import WelcomePageStyles from "./WelcomePage.module.css";
import { Button, Container } from "react-bootstrap";

export default function WelcomePage() {
  return (
    <main className={WelcomePageStyles.content}>
      <WorldIcon />
      <Container>
        <h1>While we are away</h1>
        <p>Get in touch with your beloved one, no matter the distance</p>
      </Container>
      <Container className={WelcomePageStyles.buttonGroup}>
        <Button className="p-3" variant="outline-dark">Log In</Button>
        <Button className="p-3" variant="dark">Sign Up</Button>
      </Container>
      <p>
        To <strong>Kath</strong>
      </p>
    </main>
  );
}

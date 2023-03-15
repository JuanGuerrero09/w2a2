import React, { useEffect, useState } from "react";
import WorldIcon from "../components/icons/WorldIcon";
import WelcomePageStyles from "../styles/WelcomePage.module.css";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function WelcomePage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };


  return (
    <main className={WelcomePageStyles.content}>

      <WorldIcon />
      <Container>
        <h1>While we are away</h1>
        <p>Get in touch with your beloved one, no matter the distance</p>
      </Container>
      <Container className={WelcomePageStyles.buttonGroup}>
        <Button
          onClick={handleLoginClick}
          className="p-3"
          variant="outline-dark"
        >
          Log In
        </Button>
        <Button onClick={handleSignupClick} className="p-3" variant="dark">
          Sign Up
        </Button>
      </Container>
      <p>
        To <strong>Kath</strong>
      </p>
    </main>
  );
}

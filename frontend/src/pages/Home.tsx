import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Home() {
  const { user, logout } = useContext(AppContext);
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
    }
  };
  return (
    <>
      <h1>
        Hello <strong>{user?.username}</strong>
      </h1>
      <Button onClick={handleLogOut}>Log out</Button>
    </>
  );
}

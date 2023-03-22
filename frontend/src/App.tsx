import { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import "./App.css";
import Counter from "./components/counters/Counter";
import { AppContext } from "./context/AppContext";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import WelcomePage from "./pages/WelcomePage";
import NotesPage from "./pages/NotesPage";

function App() {
  const { user, getLoggedUser, notes, getNotes } = useContext(AppContext);

  const handleShowUser = () => {
    console.log(user, notes);
  };

  useEffect(() => {
    getLoggedUser()
    user ?? getNotes();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!user ? <WelcomePage /> : <Home />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={user ? <Home /> : <WelcomePage />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/notes" element={<NotesPage />} />
        </Routes>
      </BrowserRouter>
      <Button onClick={handleShowUser}>Show user</Button>
      <Counter />
    </>
  );
}

export default App;

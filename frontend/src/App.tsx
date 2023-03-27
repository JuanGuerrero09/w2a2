import { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter, Route, Routes, Navigate, useNavigate, RouteProps } from "react-router-dom";
import "./App.css";
import Counter from "./components/countdowns/CountdownEx";
import { AppContext } from "./context/AppContext";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import WelcomePage from "./pages/WelcomePage";
import NotesPage from "./pages/NotesPage";
import CanvasPage from "./pages/CanvasPage";
import NavBar from "./components/NavBar";

interface PrivateRouteProps {
  path: string;
  isAuthenticated: boolean;
  element: React.ReactNode;
}

function App() {
  const { user, getLoggedUser, notes, getNotes } = useContext(AppContext);

  const handleShowUser = async () => {
    await getNotes()
    console.log(user, notes);
  };

  useEffect(() => {
    user ?? getLoggedUser();
  }, []);

  return (
    <>
      <BrowserRouter>
      {user && <NavBar />}
        <Routes>
          <Route path="/" element={!user ? <WelcomePage /> : <Home />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={user ? <Home /> : <WelcomePage />} />
          <Route path="/notes" element={user ? <NotesPage />: <WelcomePage />} />
          <Route path="/draws" element={user? <CanvasPage />: <WelcomePage />} />
        </Routes>
      </BrowserRouter>
      <Button onClick={handleShowUser}>Show user</Button>
      {/* <Counter /> */}
    </>
  );
}

function PrivateRoute({ path, element, isAuthenticated, ...rest }: PrivateRouteProps & RouteProps) {
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Route {...rest} path={path} element={element} />;
  } else {
    return <Navigate to="/login" replace state={{ from: path }} />;
  }
}

export default App

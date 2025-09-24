import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Avatars from "./components/Avatars.jsx";
import SubmissionBlank from "./pages/SubmissionBlank.jsx";

function App() {
  const [route, setRoute] = useState(window.location.hash || "#/");

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (route === "#/submitted") {
    return <SubmissionBlank />;
  }

  return (
    <>
      <Navbar />
      <Avatars />
    </>
  );
}

export default App;

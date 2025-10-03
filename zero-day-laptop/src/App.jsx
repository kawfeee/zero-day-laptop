import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Avatars from "./components/Avatars.jsx";
import SubmissionBlank from "./pages/SubmissionBlank.jsx";
import Page2 from "./pages/Page2.jsx";
import Page3 from "./pages/Page3.jsx";
import Page4 from "./pages/Page4.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Avatars />
          </>
        } />
        <Route path="/" element={<Avatars />} />
        <Route path="/Report" element={<Page2 />} />
        <Route path="/Employee-list" element={<Page3 />} />
        <Route path="/IT-checklist" element={<Page4 />} />
      </Routes>
    </Router>
  );
}

export default App;

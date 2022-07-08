import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./webpages/projects";
import Epics from "./webpages/epics";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/epics" element={<Epics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

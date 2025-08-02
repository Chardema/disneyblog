import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Actu from "./pages/Actu.jsx";
import Nostalgie from "./pages/Nostalgie.jsx";
import Critique from "./pages/Critique.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/actu" element={<Actu />} />
      <Route path="/nostalgie" element={<Nostalgie />} />
      <Route path="/critique" element={<Critique />} />
    </Routes>
  );
}

export default App;

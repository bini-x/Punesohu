import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ballina from "./components/Ballina";
import ListaPuneve from "./components/ListaPuneve";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ballina />} />
        <Route path="listaPuneve" element={<ListaPuneve />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

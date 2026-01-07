import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ballina from "./components/Ballina";
import ListaPuneve from "./components/ListaPuneve";
import "./index.css";
import ListaKompanive from "./components/ListaKompanive";
import RrethNesh from "./components/RrethNesh";
import Kycja from "./components/Kycja";
import Regjistrimi from "./components/Regjistrimi";
import PublikoPune from "./components/PublikoPune";
import Shpallja from "./components/Shpallja";
import Profili from "./components/Profili";
import VerifikoEmail from "./components/VerifikoEmail";
import Aplikimi from "./components/Aplikimi";
import Footeri from "./components/Footeri";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Ballina />} />
            <Route path="/listaPuneve" element={<ListaPuneve />} />
            <Route path="/listaKompanive" element={<ListaKompanive />} />
            <Route path="/rrethNesh" element={<RrethNesh />} />
            <Route path="/kycja" element={<Kycja />} />
            <Route path="/regjistrimi" element={<Regjistrimi />} />
            <Route path="/publikoPune" element={<PublikoPune />} />
            <Route path="/shpallja/:id" element={<Shpallja />} />
            <Route path="/profili/:id" element={<Profili />} />
            <Route path="/verifiko" element={<VerifikoEmail />} />
            <Route path=":id/aplikimi" element={<Aplikimi />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footeri />
    </div>
  );
}

export default App;


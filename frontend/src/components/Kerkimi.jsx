import "../App.css";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Kerkimi() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    kerko: "",
    lokacioniPunes: "",
    kategoriaPunes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (filters.kerko.trim()) {
      params.append("kerko", filters.kerko.trim());
    }

    if (filters.lokacioniPunes.trim()) {
      params.append("lokacioniPunes", filters.lokacioniPunes.trim());
    }

    if (filters.kategoriaPunes.trim()) {
      params.append("kategoriaPunes", filters.kategoriaPunes.trim());
    }

    navigate(`/?${params.toString()}`);
  };

  return (
    <div className="flex justify-center items-center border border-gray-200 mx-auto my-8 rounded-lg shadow-xl w-fit">
      <div className="flex justify-center items-center bg-white my-2">
        <form onSubmit={handleSubmit}>
          <div className="inline ">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="flex justify-center items-center mx-4"
            />
            <input
              type="text"
              placeholder="Kerko"
              className=" w-auto"
              value={filters.kerko}
              onChange={(e) =>
                setFilters({ ...filters, kerko: e.target.value })
              }
            />
          </div>

          <div className="inline ">
            <FontAwesomeIcon icon={faLocationDot} />
            <select
              name="lokacioniPunes"
              className="bg-transparent border-0 cursor-pointer focus:outline-none"
              value={filters.lokacioniPunes}
              onChange={(e) =>
                setFilters({ ...filters, lokacioniPunes: e.target.value })
              }
            >
              <option value="" hidden>
                Qyteti
              </option>
              <option value="Decan">Decan</option>
              <option value="Drenas">Drenas</option>
              <option value="Gjakove">Gjakove</option>
              <option value="Gjilan">Gjilan</option>
              <option value="Dragash">Dragash</option>
              <option value="Kacanik">Kacanik</option>
              <option value="Kline">kline</option>
              <option value="Fushe Kosove">Fushe Kosove</option>
              <option value="Kamenice">Kamenice</option>
              <option value="Mitrovica">Mitrovica</option>
              <option value="Lipjan">Lipjan</option>
              <option value="Obiliq">Obiliq</option>
              <option value="Rahovec">Rahovec</option>
              <option value="Peje">Peje</option>
              <option value="Podujeve">Podujeve</option>
              <option value="Prishtine">Prishtine</option>
              <option value="Prizren">Prizren</option>
              <option value="Skenderaj">Skenderaj</option>
              <option value="Shtime">Shtime</option>
              <option value="Suhareke">Suhareke</option>
              <option value="Ferizaj">Ferizaj</option>
              <option value="Viti">Viti</option>
              <option value="Vushtrri">Vushtrri</option>
              <option value="Malisheve">Malisheve</option>
              <option value="Junik">Junik</option>
              <option value="Hani I Elezit">Hani I Elezit</option>
              <option value="Viti">Viti</option>
            </select>
          </div>

          <div className="inline">
            <FontAwesomeIcon icon={faBriefcase} />
            <select
              name="kategoriaPunes"
              className="bg-transparent border-0 cursor-pointer focus:outline-none"
              value={filters.kategoriaPunes}
              onChange={(e) =>
                setFilters({ ...filters, kategoriaPunes: e.target.value })
              }
            >
              <option value="" hidden>
                Kategoria
              </option>
              <option value="industria">Industria</option>
              <option value="Administrate">Administratë</option>
              <option value="agrikulture-industri-ushqimore">
                Agrikulturë dhe Industri Ushqimore
              </option>
              <option value="arkitekture">Arkitekturë</option>
              <option value="banka">Banka</option>
              <option value="retail-distribuim">Retail dhe Distribuim</option>
              <option value="ndertimtari-patundshmeri">
                Ndërtimtari & Patundshmëri
              </option>
              <option value="mbeshtetje-konsumatoreve-call-center">
                Mbështetje e Konsumatorëve, Call Center
              </option>
              <option value="ekonomi-finance-kontabilitet">
                Ekonomi, Financë, Kontabilitet
              </option>
              <option value="edukim-shkence-hulumtim">
                Edukim, Shkencë & Hulumtim
              </option>
              <option value="pune-te-pergjithshme">Punë të Përgjithshme</option>
              <option value="burime-njerezore">Burime Njerëzore</option>
              <option value="teknologji-informacioni">
                Teknologji e Informacionit
              </option>
              <option value="sigurim">Sigurim</option>
              <option value="gazetari-shtyp-media">
                Gazetari, Shtyp & Media
              </option>
              <option value="ligj-legjislacion">Ligj & Legjislacion</option>
              <option value="menaxhment">Menaxhment</option>
              <option value="marketing-reklamim-pr">
                Marketing, Reklamim & PR
              </option>
              <option value="it">IT</option>
              <option value="shendetesi-medicine">Shëndetësi, Medicinë</option>
              <option value="Prodhim">Prodhim</option>
              <option value="Siguri$Mbrojtje">Siguri&Mbrojtje</option>
              <option value="Industri te sherbimit">
                Industri te sherbimit
              </option>
              <option value="Telekomunikim">Telekomunikim</option>
              <option value="Tekstil, Lekure, Industri Veshembathje">
                Tekstil, Lekure, Industri Veshembathje
              </option>
              <option value="Gastronomi, Hoteleri, Turizem">
                Gastronomi, Hoteleri, Turizem
              </option>
              <option value="Transport, Logjistike">
                Transport, Logjistike
              </option>
            </select>
          </div>
          <button
            type="submit"
            className="w-30 h-10 mx-8 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Kerko
          </button>
        </form>
      </div>
    </div>
  );
}

export default Kerkimi;

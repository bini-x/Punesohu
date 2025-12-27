import { useEffect, useState } from "react";
import "../index.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Profili() {
  const [perdoruesiData, setPerdoruesiData] = useState({});
  const [shpalljaData, setShpalljaData] = useState([]);
  // const [klikimiShpalljes, setKlikimiShpalljes] = useState(false);
  const [shpalljaKlikuar, setShpalljaKlikuar] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/profili/${id}`,
        );
        setPerdoruesiData(response.data.data);
        // console.log(perdoruesiData);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    console.log("perdoruesi: ", perdoruesiData);
  }, [perdoruesiData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/shpallja/kompania",
        );
        if (Array.isArray(response.data.data)) {
          const shpalljetFiltruara = response.data.data.filter((shpallja) => {
            return shpallja.emailKompanise === perdoruesiData.email;
          });

          if (shpalljetFiltruara.length > 0) {
            setShpalljaData(shpalljetFiltruara);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [perdoruesiData]);

  useEffect(() => {
    console.log("shpallja: ", shpalljaData);
  }, [shpalljaData]);

  if (!perdoruesiData) {
    return (
      <div>
        <Header />
        <div className="text-center p-10">
          <p>Diqka shkoi keq!</p>
        </div>
      </div>
    );
  }

  const hapShpalljen = (shpallja) => {
    setShpalljaKlikuar(shpallja);
  };

  const modifikoShpalljen = (e) => {
    const { id, value } = e.target;
    setShpalljaKlikuar({
      ...shpalljaKlikuar,
      [id]: value,
    });
  };

  const fshijShpalljen = async (id) => {
    try {
      const confirmed = window.confirm(
        "A jeni i sigurt qe doni ta fshini shpalljen?",
      );

      if (confirmed) {
        await axios.delete(`http://localhost:3000/api/shpallja/${id}`);

        setShpalljaData(shpalljaData.filter((sh) => sh._id !== id));
        setShpalljaKlikuar(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const ruajNdryshimet = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:3000/api/shpallja/${shpalljaKlikuar._id}`,
        shpalljaKlikuar,
      );

      setShpalljaData(
        shpalljaData.map((sh) =>
          sh._id === shpalljaKlikuar._id ? shpalljaKlikuar : sh,
        ),
      );

      alert("Ndryshimet u ruajten");
      setShpalljaKlikuar(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="">
      {/* <img src="" alt="Foto e Profilit" /> */}
      <h1>{perdoruesiData.emri || perdoruesiData.kompania}</h1>
      <h2>{perdoruesiData.mbiemri}</h2>
      <p>{perdoruesiData.email}</p>
      {shpalljaData.map((sh) => {
        return (
          <div
            className="border m-2 p-2"
            key={sh._id}
            onClick={() => hapShpalljen(sh)}
          >
            <h3>Shpallja e Punes:</h3>
            <div className="border m-2 p-2">
              <p>Pozita e Punes: {sh.pozitaPunes}</p>
              <p>Lokacioni: {sh.lokacioniPunes}</p>
              <p>Niveli: {sh.niveliPunes}</p>
            </div>
            <button
              className="publikoPune cursor-pointer"
              type="button"
              onClick={() => hapShpalljen(sh)}
            >
              Shiko Me Shume
            </button>
          </div>
        );
      })}

      {shpalljaKlikuar && (
        <div className="border absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl">
          <form onSubmit={ruajNdryshimet}>
            <label htmlFor="pozitaPunes">Pozita e punes:</label>
            <input
              id="pozitaPunes"
              type="text"
              value={shpalljaKlikuar.pozitaPunes || ""}
              onChange={modifikoShpalljen}
              className="border"
            />
            <label htmlFor="lokacioniPunes">Lokacioni i punes:</label>
            <input
              id="lokacioniPunes"
              type="text"
              value={shpalljaKlikuar.lokacioniPunes || ""}
              onChange={modifikoShpalljen}
              className="border"
            />

            <label htmlFor="niveliPunes">Niveli i punes:</label>
            <input
              id="niveliPunes"
              type="text"
              value={shpalljaKlikuar.niveliPunes || ""}
              onChange={modifikoShpalljen}
              className="border"
            />
            <label htmlFor="pershkrimiPunes">Pershkrimi i punes:</label>
            <textarea
              id="pershkrimiPunes"
              type="text"
              value={shpalljaKlikuar.pershkrimiPunes || ""}
              onChange={modifikoShpalljen}
              className="border"
            />
            <button
              type="button"
              className="publikoPune bg-red-500! cursor-pointer"
              onClick={() => fshijShpalljen(shpalljaKlikuar._id)}
            >
              Fshij Shpalljen
            </button>
            <button type="submit" className="publikoPune cursor-pointer">
              Perfundo
            </button>
          </form>
          <FontAwesomeIcon
            icon={faX}
            onClick={() => setShpalljaKlikuar(null)}
          ></FontAwesomeIcon>
        </div>
      )}
    </div>
  );
}

export default Profili;

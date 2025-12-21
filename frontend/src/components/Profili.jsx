import { useEffect, useState } from "react";
import "../index.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

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

  const hapShpalljen = (e) => {
    setShpalljaKlikuar(e);
  };

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
          <p>Pozita e punes: {shpalljaKlikuar.pozitaPunes}</p>
          <p>Lokacioni: {shpalljaKlikuar.lokacioniPunes}</p>
          <p>Niveli: {shpalljaKlikuar.niveliPunes}</p>
          <p>Pershkrimi: {shpalljaKlikuar.pershkrimiPunes}</p>
        </div>
      )}
    </div>
  );
}

export default Profili;

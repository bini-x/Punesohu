// frontend/src/pages/PunetRuajtura.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import ShpalljaCard from "../components/ShpalljaCard";
import Perdoruesi from "../PerdoruesiContext";
import Header from "./Header";

function PunetRuajtura() {
  const [shpalljetRuajtura, setShpalljetRuajtura] = useState([]);
  const [duke_ngarkuar, setDuke_ngarkuar] = useState(true);
  const [gabim, setGabim] = useState(null);
  const { perdoruesiData } = Perdoruesi.usePerdoruesi();

  useEffect(() => {
    merreShpalljetRuajtura();
  }, []);

  const merreShpalljetRuajtura = async () => {
    try {
      // if (!perdoruesiData) {
      //   setGabim("Ju lutem kyçuni për të parë punët e ruajtura");
      //   setDuke_ngarkuar(false);
      //   return;
      // }

      const response = await axios.get(
        "http://localhost:3000/api/punetRuajtura/shpalljet-e-ruajtura",
      );

      if (response.data.success) {
        setShpalljetRuajtura(response.data.data);
      }
    } catch (error) {
      console.error("Gabim gjatë marrjes së shpalljeve të ruajtura:", error);
      setGabim("Gabim gjatë ngarkimit të shpalljeve të ruajtura");
    } finally {
      setDuke_ngarkuar(false);
    }
  };

  if (duke_ngarkuar) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Duke ngarkuar...</p>
        </div>
      </div>
    );
  }

  if (gabim) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-xl text-red-600">{gabim}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold text-gray-800">
              Punët e Ruajtura
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Këtu mund të shihni të gjitha punët që keni ruajtur
          </p>
        </div>

        {shpalljetRuajtura.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Nuk keni punë të ruajtura
            </h2>
          </div>
        ) : (
          <>
            <div className="mb-4 text-gray-600">
              <p className="text-lg">
                Gjithsej{" "}
                <span className="font-semibold text-gray-800">
                  {shpalljetRuajtura.length}
                </span>{" "}
                {shpalljetRuajtura.length === 1
                  ? "punë e ruajtur"
                  : "punë të ruajtura"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shpalljetRuajtura.map((sh) => (
                <ShpalljaCard key={sh._id} shpallja={sh} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PunetRuajtura;

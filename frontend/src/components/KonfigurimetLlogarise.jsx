import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function KonfigurimetLlogarise() {
  const [perdoruesiData, setPerdoruesiData] = useState({});

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/profili/${id}`,
        );
        setPerdoruesiData(response.data.data);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let dataToSend;

      if (perdoruesiData.tipiPerdoruesit === "aplikant") {
        dataToSend = {
          tipiPerdoruesit: "aplikant",
          emri: perdoruesiData.emri,
          mbiemri: perdoruesiData.mbiemri,
          email: perdoruesiData.email,
          fjalekalimi: perdoruesiData.fjalekalimi,
        };
      } else if (perdoruesiData.tipiPerdoruesit === "punedhenes") {
        dataToSend = {
          tipiPerdoruesit: "punedhenes",
          kompania: perdoruesiData.kompania,
          email: perdoruesiData.email,
          fjalekalimi: perdoruesiData.fjalekalimi,
        };
      }

      const response = await axios.put(
        `http://localhost:3000/api/profili/${id}`,
        dataToSend,
      );

      if (response.data.success) {
        alert(response.data.message);
      }
    } catch (err) {
      console.log("err: ", err);
    }
  };

  const modifikoProfilin = (e) => {
    const { id, value } = e.target;
    setPerdoruesiData({
      ...perdoruesiData,
      [id]: value,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg">
  <p className="text-2xl font-bold text-gray-800 mb-6 text-center">Konfigurimet</p>
  <form onSubmit={handleSubmit} className="space-y-4">
    <div className="space-y-2">
      <label htmlFor="email" className="block font-medium text-gray-700">
        Perditeso email
      </label>
      <input
        id="email"
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        onChange={modifikoProfilin}
      />
    </div>
    
    <div className="space-y-2">
      <label htmlFor="fjalekalimi" className="block font-medium text-gray-700">
        Perditeso fjalekalimin
      </label>
      <input
        id="fjalekalimi"
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        onChange={modifikoProfilin}
      />
    </div>
    
    <input 
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
      type="text" 
    />
    
    <button 
      type="submit" 
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
    >
      Perfundo
    </button>
  </form>
</div>
  );
}

export default KonfigurimetLlogarise;

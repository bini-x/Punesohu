import { useNavigate } from "react-router-dom";
import "../index.css";
import { useState } from "react";
import axios from "axios";

function VerifikoEmail() {
  const navigate = useNavigate();
  const [kodiVerifikimit, setKodiVerifikimit] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const email = localStorage.getItem("emailForVerification");

      const response = await axios.post(
        "http://localhost:3000/api/regjistrimi/verifiko",
        {
          email: email,
          kodi: kodiVerifikimit,
        },
      );

      if (response.data.success || response.data.status) {
        console.log("sukses: ", response);
        alert("Verifikimi perfundoj me sukses");
        navigate("/kycja");
      }
    } catch (error) {
      if (error.response.data.error.includes("Kodi eshte gabim")) {
        alert("Kodi eshte gabim");
      }
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="kodi">Sheno Kodin</label>
        <input
          placeholder="Sheno Kodin"
          type="text"
          id="kodi"
          className="border"
          value={kodiVerifikimit}
          onChange={(e) => setKodiVerifikimit(e.target.value)}
        />
        <button type="submit">Konfirmo</button>
      </form>
    </div>
  );
}

export default VerifikoEmail;

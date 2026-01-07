import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import "../index.css";
import { useNavigate } from "react-router-dom";

function ShpalljaCard({ shpallja }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shpallja/${shpallja._id}`);
  };

  return (
    <div
      className="border border-gray-200 hover:bg-gray-200 shadow-xl rounded-xl p-4 w-full cursor-pointer "
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faUser} className="text-3xl" />
          <p className="paragraf font-bold !text-xl">{shpallja.pozitaPunes}</p>
        </div>
        <FontAwesomeIcon icon={faBookmark} className="text-xl" />
      </div>

      <div className="mt-5">
        <p className="paragraf">
          <FontAwesomeIcon icon={faLocationDot} />
          {shpallja.lokacioniPunes}
        </p>
      </div>

      <div className="grid grid-cols-3 mt-4">
        <p className="paragraf">{shpallja.kategoriaPunes}</p>
        <p className="paragraf">{shpallja.niveliPunes}</p>
        <p className="paragraf">
          <FontAwesomeIcon icon={faDollarSign} />
          1000
        </p>
      </div>
      <p className="line-clamp-2 mt-3 ">{shpallja.pershkrimiPunes}</p>

      <div className="place-self-end mt-5">
        <button
          className="border border-gray-200 rounded-4xl p-2 cursor-pointer"
          onClick={handleClick}
        >
          Shiko Detajet
        </button>
      </div>
    </div>
  );
}

export default ShpalljaCard;

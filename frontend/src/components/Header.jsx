import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../App.css";
import "../index.css";

function Header() {
  return (
    <div>
      <img src={logo} alt="" />
      <a href="">Ballina</a>
      <Link to="/listaPuneve">Lista Puneve </Link>
      <a href="">Lista Kompanive</a>
      <a href="">Per Punedhenesit</a>
      <a href="">Kush Jemi</a>
      <button>Kycu</button>
      <button>Publiku Pune</button>
      <img src="" alt="" />
    </div>
  );
}

export default Header;

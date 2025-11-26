import Header from "./Header";
import ShpalljaCard from "./ShpalljaCard";
import "../index.css";

function ListaPuneve() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 justify-items-center">
        <ShpalljaCard />
        <ShpalljaCard />
        <ShpalljaCard />
        <ShpalljaCard />
        <ShpalljaCard />
        <ShpalljaCard />
      </div>
    </div>
  );
}

export default ListaPuneve;

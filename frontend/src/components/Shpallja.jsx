import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";

function Shpallja() {
  return (
    <div>
      <Header />
      <div className="flex justify-around my-20">
        <div>
          <div className="grid grid-cols-4">
            <FontAwesomeIcon icon={faAmazon} className="text-5xl self-center" />
            <p className="font-bold text-2xl">Vendi Punes</p>
            <p className="-col-4">Kategoria</p>
            <p>Lokacioni</p>
            <p>Data</p>
          </div>
        </div>
        <FontAwesomeIcon icon={faBookmark} />
      </div>
      <p className="py-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius amet,
        cumque iure dicta exercitationem saepe! Amet sunt blanditiis ut
        similique fuga saepe velit, et molestiae delectus eos aliquid quam modi.
      </p>
    </div>
  );
}

export default Shpallja;

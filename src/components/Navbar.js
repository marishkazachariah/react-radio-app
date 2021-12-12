import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faChevronLeft, faPowerOff);

export default function Navbar() {
  return (
    <header className="Header">
      <FontAwesomeIcon icon={faChevronLeft} size="1x" />
      <div>Stations</div>
      <FontAwesomeIcon icon={faPowerOff} size="1x" />
    </header>
  );
}

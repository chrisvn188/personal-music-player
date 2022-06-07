import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <div className="nav">
      <div className="logo">WAVES</div>
      <button>
        <FontAwesomeIcon icon={faMusic} size="2x" />
      </button>
    </div>
  );
}

export default Nav;

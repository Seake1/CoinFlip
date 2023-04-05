import { Link } from "react-router-dom";
import "./Header.css";
import Login from "./Login";

const Header = (props) => {
  return (
    <div className="header">
      <div>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
      <div>
        <h1>Game library</h1>
        <h2>{props.title}</h2>
      </div>
      <div><Login/></div>
    </div>
  );
};

export default Header;

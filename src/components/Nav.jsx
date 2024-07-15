import { Link } from "react-router-dom";
import "../layout/style/Nav.css";

const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/home" className="linkName">
          Home
        </Link>
        <Link to="/form" className="linkName">
          Register
        </Link>
      </nav>
    </>
  );
};

export default Nav;

import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import HeaderLink from "components/HeaderLink";

const Header = () => {
  return (
    <header>
      <Link to={"./"}>
        <img src={logo} alt="" />
      </Link>

      <nav>
        <HeaderLink url={"./"}>Home</HeaderLink>
        <HeaderLink url={"./favoritos"}>Favoritos</HeaderLink>
      </nav>
    </header>
  );
};

export default Header;

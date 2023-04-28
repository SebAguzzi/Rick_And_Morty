import generarNumeroAleatorio from "../Random/Random.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = ({ onSearch }) => {
  const location = useLocation();
  if (location.pathname === "/") return null;
  return (
    <nav className={styles.navbar}>
      <SearchBar onSearch={onSearch} />
      <button
        className={styles.boton}
        onClick={() => {
          onSearch(generarNumeroAleatorio());
        }}
      >
        Random
      </button>
      <button className={styles.boton}>
        <Link to="/home" className={styles.miLink}>
          Home{" "}
        </Link>
      </button>
      <button className={styles.boton}>
        <Link to="/about" className={styles.miLink}>
          About{" "}
        </Link>
      </button>
      <button className={styles.boton}>
        <Link to="/favorites" className={styles.miLink}>
          FAVORITOS{" "}
        </Link>
      </button>
    </nav>
  );
};

export default Nav;

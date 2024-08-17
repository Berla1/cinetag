import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeCoracaoFavorito from "./desfavoritar.png";
import { useFavoritoContext } from "components/context/favoritos";
import { Link } from "react-router-dom";

const Card = ({ id, titulo, capa }) => {
  const { favorito, addFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = ehFavorito ? iconeCoracaoFavorito : iconeFavoritar;
  return (
    <>
      <div className={styles.container}>
        <Link className={styles.card} to={`/${id}`}>
          <img src={capa} alt={titulo}/>
          <h2>{titulo}</h2>
        </Link>
        <img
          className={styles.favoritar}
          src={icone}
          alt="Favoritar filme"
          onClick={() => {
            addFavorito({ id, titulo, capa });
          }}
        />
      </div>
    </>
  );
};

export default Card;

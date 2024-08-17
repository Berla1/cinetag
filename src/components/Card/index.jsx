import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeCoracaoFavorito from "./desfavoritar.png";
import { useFavoritoContext } from "components/context/favoritos";

const Card = ({ id, titulo, capa }) => {
  const {favorito, addFavorito} = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = ehFavorito ? iconeCoracaoFavorito : iconeFavoritar
  return (
    <>
      <div className={styles.container}>
        <img src={capa} alt={titulo} />
        <h2>{titulo}</h2>
        <img
          className={styles.favoritar}
          src={icone}
          alt="Favoritar filme"
          onClick={() => {
            addFavorito({id, titulo, capa})
          }}
        />
      </div>
    </>
  );
};

export default Card;

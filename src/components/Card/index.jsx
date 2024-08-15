import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeCoracaoFavorito from "./desfavoritar.png";

const Card = ({ id, titulo, capa }) => {
  return (
    <>
      <div className={styles.container}>
        <img src={capa} alt={titulo} />
        <h2>{titulo}</h2>
        <img
          className={styles.favoritar}
          src={iconeFavoritar}
          alt="Favoritar filme"
        />
      </div>
    </>
  );
};

export default Card;

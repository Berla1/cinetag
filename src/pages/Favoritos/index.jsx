import Titulo from "components/Titulo";
import styles from "./Favoritos.module.css";
import Card from "components/Card";
import Banner from "components/Banner";
import { useFavoritoContext } from "components/context/favoritos";

const Favoritos = () => {
  const { favorito } = useFavoritoContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>Meus Favoritos</Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
};

export default Favoritos;

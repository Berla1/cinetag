import styles from "./Home.module.css";
import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import videos from "json/db.json";

const Home = () => {
  return (
    <>
      <Banner imagem="home" />
      <Titulo>Um lugar para guardar seus vídeos e filmes!</Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return (
            <Card
              key={video.id}
              id={video.id}
              titulo={video.titulo}
              capa={video.capa}
            />
          );
        })}
      </section>
    </>
  );
};

export default Home;

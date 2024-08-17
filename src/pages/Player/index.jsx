import Banner from "components/Banner";
import styles from "./Player.module.css";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import videos from "json/db.json";

const Player = () => {
  const parametros = useParams();
  const video = videos.find((video) => {
    return video.id === Number(parametros.id);
  });
  console.log(video);
  return (
    <>
      <Banner imagem={"player"} />
      <Titulo>Player</Titulo>
      <section className={styles.video}>
        <iframe
            width="70%"
            height="100%"
            src={video.link}
            title={video.titulo}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
    </>
  );
};

export default Player;

import Banner from "components/Banner";
import Footer from "components/Footer";
import Header from "components/Header";
import Titulo from "components/Titulo";

const Home = () => {
  return (
    <>
      <Header />
      <Banner imagem='home'/>
      <Titulo>Um lugar para guardar seus vídeos e filmes!</Titulo>
      <Footer />
    </>
  );
};

export default Home;

import Container from "components/Container";
import FavoritosProvider from "components/context/favoritos";
import Footer from "components/Footer";
import Header from "components/Header";
import Favoritos from "pages/Favoritos";
import Home from "pages/Home";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Container>
        <FavoritosProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/:id" element={<Player/>} />
          </Routes>
        </FavoritosProvider>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default AppRoutes;

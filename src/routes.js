import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import Favoritos from "pages/Favoritos";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default AppRoutes;

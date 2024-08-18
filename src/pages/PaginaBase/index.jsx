import Container from "components/Container"
import FavoritosProvider from "components/context/favoritos"
import Footer from "components/Footer"
import Header from "components/Header"
import { Outlet } from "react-router-dom"

const PaginaBase = () => {
    return(
        <main>
            <Header/>
            <FavoritosProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritosProvider>
            <Footer/>
        </main>
    )
}

export default PaginaBase
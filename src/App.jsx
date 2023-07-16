import { ListaPeliculas } from "./assets/components/ListaPeliculas"
import "./assets/components/App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { DetallePelicula } from "./assets/pages/DetallePelicula"
import { LandingPage } from "./assets/pages/LandingPage"

export function App() {

  return (
     <section>

      <BrowserRouter>
        <Link to="/">
          <header className="aplicacion">
            <h1 className="aplicacion-h1">Encabezado</h1>
          </header>
        </Link>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/detalle/:Id" element={<DetallePelicula />} />
          </Routes>
        </main>
      </BrowserRouter>

    </section>
  )
}



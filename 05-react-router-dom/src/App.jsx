import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router";

import Sobre from "./pages/Sobre";

import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Contato from "./pages/contato";
import Header from "./components/header/header";
import NaoEncontrado from "./pages/NaoEncotrado";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 m-0 p-0">
      <BrowserRouter>
        <Header />

        <main className="d-flex flex-grow-1 flex-column">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NaoEncontrado />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
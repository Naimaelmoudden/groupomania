import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Error404 from "./pages/Error/Error404";
import Apropos from "./pages/Apropos/Apropos";
import Logement from "./pages/Logement/Logement";
import "./routes.css"

//Utilisation de React Routeur Dom
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        {/*Route remplace Switch*/}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;

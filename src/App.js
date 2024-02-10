import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar01 from "./components/Navbar01";
import Greetings from "./components/Greetings"
import Main01 from "./components/Main01";
import Search01 from "./components/Search01";
import Footer01 from "./components/Footer01"
import { useState } from "react";
import MoreInformation from "./components/MoreInformation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Ho testato diverse volte l'api e le chiamate sono sinora andate tutti a buon fine.
//Suggerisco però gentilmente di utilizzare la lingua inglese sia per il nome della città sia
//per il Paese che la contiene. Come api key ho adoperato una key gratuita che mi è stata
//cortesemente passata da un compagno di corso, dato che il sito non mi inviava la mail
//di conferma del mio account per generare un'altra key. Comunque, sembra funzionare tutto
//correttamente grazie alle 1000 chiamate gratuite.
function App() {
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const handleSearchSubmit = (city, countryCode) => {
    setCity(city);
    setCountryCode(countryCode);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar01 />
        </header>

        <main className="App-header">
          <Routes>
            <Route
              element={
                <>
                  <Greetings/>
                  <Search01 onSubmit={handleSearchSubmit} />
                  <Main01 city={city} countryCode={countryCode} />
                </>
              }
              path="/"
            />
          </Routes>
          <Routes>
            <Route
              element={
                <MoreInformation city={city} countryCode={countryCode} />
              }
              path="/detail"
            />
          </Routes>
        </main>
        <footer className="bg-body-tertiary mt-2">
          <Footer01 />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

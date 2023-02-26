import Connexion from "../pages/Connexion";
import "../styles/App.css";
import { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Banner from "./Banner";
import "../styles/layout.css";
import Accueil from "../pages/Accueil";

function App() {
  const [logged, setLogged] = useState(false);
  console.log(logged);
  return (
    <div className="App">
      {!logged ? (
        <Connexion setLogged={setLogged} />
      ) : (
        <Router>
          <div className="layout">
            <Banner />
            <div className="page">
              <Routes>
                <Route path="Accueil" element={<Accueil />} />
              </Routes>
            </div>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;

import Connexion from "../pages/Connexion";
import "../styles/App.css";
import { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Banner from "./Banner";
import Accueil from "../pages/Accueil";
import '../styles/second-part.css'

function App() {
  const [logged, setLogged] = useState(false);
  
  return (
    <div className="App">
      {!logged ? (
        <Connexion setLogged={setLogged} />
      ) : (
        <Router>
          <div className="second-part">
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

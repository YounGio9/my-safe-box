import Connexion from "../pages/Connexion";
import "../styles/App.css";
import { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Banner from "./Banner";
import Accueil from "../pages/Accueil";
import "../styles/second-part.css";
import MesDocuments from "../pages/MesDocuments";
import DocsContextProvider from "./DocsContext";
import MesDossiers from "../pages/MesDossiers";

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <div className="App">
      {!logged ? (
        <Connexion setLogged={setLogged} />
      ) : (
        <DocsContextProvider>
          <Router>
            <div className="second-part">
              <Banner />
              <div className="page">
                <Routes>
                  <Route path="Accueil" element={<Accueil />} />
                  <Route path="MesDocuments" element={<MesDocuments />} />
                  <Route path="MesDossiers" element={<MesDossiers />}/>
                </Routes>
              </div>
            </div>
          </Router>
        </DocsContextProvider>
      )}
    </div>
  );
}

export default App;

import Connexion from "../pages/Connexion";
import "../styles/App.css";
import { useContext } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Banner from "./Banner";
import Accueil from "../pages/Accueil";
import "../styles/second-part.css";
import MesDocuments from "../pages/MesDocuments";
import MesDossierspartages from "../pages/MesDossierspartages";
import { DocsContext } from "./DocsContext";
import MesDossiers from "../pages/MesDossiers";

function App() {

  const {logged} = useContext(DocsContext)

  return (
    
    <div className="App">
      {!logged ? (
        <Connexion/>
      ) : (
          <Router>
            <div className="second-part">
              <Banner />
              <div className="page">
                <Routes>
                  <Route path="Accueil" element={<Accueil />} />
                  <Route path="MesDocuments" element={<MesDocuments />} />
                  <Route path="MesDossiers" element={<MesDossiers />}/>
                  <Route path="MesDossierspartages" element={<MesDossierspartages />} />
                </Routes>
              </div>
            </div>
          </Router>
      )}
    </div>

  );
}

export default App;

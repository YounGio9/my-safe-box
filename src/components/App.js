import Connexion from '../pages/Connexion';
import '../styles/App.css';
import { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Banner from './Banner';

function App() {

  const [logged, setLogged] = useState(false);
  console.log(logged)
  return (

    <div className="App">
      {!logged ? <Connexion setLogged={setLogged} /> : (

        <div className='layout'>
            <Banner />
        </div>
      )}
        

    </div>


    
  );
}

export default App;

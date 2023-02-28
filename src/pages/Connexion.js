import React from 'react'
import '../styles/Connexion.css'
import logo from '../assets/LOGO2 2.png'
import { Link } from 'react-router-dom'
import { redirect } from 'react-router-dom'

function Connexion(props) {
  

const handleSubmit = (e) => {
  e.preventDefault()
  props.setLogged(true)
//  redirect('/Accueil')
}

  return (
    <div className='Connexion'>
        <div className="wrapper">
          <div className='logo-part'>
              <img src={logo} alt="Logo" />
          </div>
          <div className='form-wrapper'>

            <form method='POST' onSubmit={handleSubmit}>
                <p>CONNEXION</p>

                <label htmlFor="email">
                  <input type={'email'} required autoComplete='off' placeholder="Email" name="mail" id="email" />
                </label>

                <label htmlFor="password">
                  <input type="password" placeholder='Mot de passe' required name="password" id="password" />
                </label>

                <span>Mot de passe oublié?</span>

                <button type="submit">Se connecter</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Connexion
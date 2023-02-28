import React from 'react'
import { GrUpdate } from 'react-icons/gr'
import { VscAdd } from 'react-icons/vsc'
import { FaSearch } from 'react-icons/fa'
import '../styles/SecondBanner.css'

function SecondBanner() {
const iconStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

  return (
    <div className='second-banner'>
    <div className="search-bar">
      <input placeholder='Rechercher' type="text" name="search" id="searchbar" />
      <FaSearch style={{
        position: 'absolute',
        right: -7,
        fontSize: 29,
        top: 0,
        bottom: 0,
        margin: 'auto'
      }}/>
    </div>
    <span className="advanced-search">Recherche avancée </span>
    <span style={iconStyle}><VscAdd fontSize={29}/></span>
    <span style={iconStyle}><GrUpdate fontSize={29}/></span>
    <span className="profile-picture">
      L
    </span>

    
    </div>
  )
}

export default SecondBanner
import React, { useContext, useState } from "react"
import { GrUpdate } from "react-icons/gr"
import { VscAdd } from "react-icons/vsc"
import { FaSearch } from "react-icons/fa"
import "../styles/SecondBanner.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { DocsContext } from "./DocsContext"
function SecondBanner() {
  const [activeProfile, setActiveProfile] = useState(false)
  const { setLogged } = useContext(DocsContext)

  const iconStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  return (
    <div className="second-banner">
      <div className="search-bar">
        <input
          placeholder="Rechercher"
          type="text"
          name="search"
          id="searchbar"
        />
        <FaSearch
          style={{
            position: "absolute",
            right: -7,
            fontSize: 29,
            top: 0,
            bottom: 0,
            margin: "auto",
          }}
        />
      </div>
      <span className="advanced-search">Recherche avancée </span>

      <span className="add-btn" style={iconStyle}>
        <VscAdd fontSize={29} />
      </span>
      <span style={iconStyle}>
        <GrUpdate fontSize={29} />
      </span>
      <span onClick={() => setActiveProfile(true)} className="profile-picture">
        L
      </span>
      <div className={activeProfile ? "profile" : "no-profile"}>
        <button className="p-close-btn" onClick={() => setActiveProfile(false)}>
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            icon={faX}
            fontSize={25}
            color={"#FF0000"}
          />
        </button>
        <div className="pp-wrapper">
          <span className="lg-pp profile-picture"></span>
          <span>Francisco AQUEREBURU</span>
          <button
            onClick={() => setLogged(false)}
            className="general-btn logout-btn"
          >
            Se deconnecter
          </button>
        </div>

        <span className="p-title">Paramètre</span>
        <span>Email: FranCF@gmail.com</span>
        <span>Mot de passe: ..........</span>
        <span className="p-title">A propos</span>
        <span>Version produit: 1.0.1</span>
      </div>
    </div>
  )
}

export default SecondBanner

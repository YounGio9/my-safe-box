import React from "react";
import "../styles/Banner.css";
import logo from "../assets/LOGO2 1.png";
import { useState, useEffect } from "react";
import { SlArrowRight, SlArrowDown } from "react-icons/sl";

function Banner() {
    const [active, setActive] = useState("");

  const sections = [
    "Accueil",
    "Mes documents",
    "Mes dossiers",
    "Mes dossiers partagés",
  ];
  const sections2 = [
    "Gestions des document",
    "Gestions des utilisateurs",
    "Gestion des groupes",
  ];

  useEffect(() => {
    const sections = document.querySelectorAll(".section")
    sections.forEach(section => {
        if(section.innerText === active) {
            section.style.borderLeft = "5px solid indigo"    
            section.style.boxShadow = "0 0 2px #ddd"
        }
        else {
            section.style.border = 0   
            section.style.boxShadow = "none"
        }
                   
    })    
  }, [active]);

  const handleClick = (e) => {
    setActive(e.target.innerText)
    }
  

  const [visible, setVisible] = useState(false);


  return (
    <div className="Banner">
      <img src={logo} alt="logo" />

      <div className="menu">
        {sections.map((section) => (
          <span className="section" onClick={handleClick} key={section}>{section}</span>
        ))}
        <span style={{cursor: 'pointer', paddingLeft: 25}} onClick={() => setVisible(!visible)}>
          Administration &nbsp;{" "}
          {visible ? (
            <SlArrowDown fontSize={17} fontWeight="bold" />
          ) : (
            <SlArrowRight fontWeight="bold" fontSize={17} />
          )}{" "}
        </span>
        {sections2.map((section) => (
          <span className="section" onClick={handleClick} style={{ display: visible ? "inline" : "none" }} key={section}>
            {section}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Banner;

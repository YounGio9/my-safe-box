import React from "react";
import "../styles/Banner.css";
import logo from "../assets/LOGO2 1.png";
import { useState, useEffect } from "react";
import { SlArrowRight, SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";

function Banner() {
  const [active, setActive] = useState("Accueil");

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
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      if (section.innerText === active) {
        section.style.borderLeft = "5px solid #080669";
        section.style.boxShadow = "0 0 2px #bbb";
      } else {
        section.style.border = 0;
        section.style.boxShadow = "none";
      }
    });
  }, [active]);

  const handleClick = (e) => {
    setActive(e.target.innerText);
  };

  const [visible, setVisible] = useState(false);

  return (
    <div className="Banner">
      <div className="Banner-fixed">
        <img src={logo} alt="logo" />

        <div className="menu">
          {sections.map((section) => (
            <Link key={section} to={`/${section}`} className="section">
              <span
                onClick={handleClick}
                style={{ height: "100%", display: "inline-block" }}
              >
                {section}
              </span>
            </Link>
          ))}
          <span
            style={{ cursor: "pointer", paddingLeft: 45 }}
            onClick={() => setVisible(!visible)}
          >
            Administration &nbsp;{" "}
            {visible ? (
              <SlArrowDown fontSize={17} fontWeight="bold" />
            ) : (
              <SlArrowRight fontWeight="bold" fontSize={17} />
            )}{" "}
          </span>
          {sections2.map((section) => (
            <Link key={section} to={`/${section}`} className="section">
              <span
                onClick={handleClick}
                style={{
                  display: visible ? "inline-block" : "none",
                  height: "100%",
                }}
              >
                {section}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
